import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

export function getRecipes() {
  getRstFileList().then((fileList) => {
    const listContainer = document.getElementById("file-list-container");
    listContainer.innerHTML = fileList;
  });
}

async function getFilesRecursively(octokit, owner, repo, path) {
  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
    });

    const files = response.data.filter((item) => item.type === "file");
    const subdirectories = response.data.filter((item) => item.type === "dir" && !item.path.includes('_static') && !item.path.includes('_templates'));
    const subdirectoryFiles = await Promise.all(
      subdirectories.map((subdir) =>
        getFilesRecursively(octokit, owner, repo, subdir.path)
      )
    );

    return files.concat(...subdirectoryFiles);
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getRstFileList() {
  try {
    const octokit = await new Octokit({});
    const files = await getFilesRecursively(
      octokit,
      "BlakeDarrow",
      "DarrowRecipes",
      "source/sphinx"
    );
    const rstFiles = files.filter(
      (item) => item.type === "file" && item.name.endsWith(".rst")
    );
    const fileNames = await Promise.all(rstFiles.map(getRecipeContent));
    const fileList = `<ol>${fileNames
      .map(
        (recipeDict) =>
          `<li class="toctree-l1"><a class="reference internal" onclick="loadRecipe('${recipeDict[0]}','${recipeDict[1]}','${recipeDict[2]}','${recipeDict[3]}','${recipeDict[4]}')">${recipeDict[0]}</a></li>`
      )
      .join("")}</ol>`;
    return fileList;
  } catch (error) {
    console.error(error);
  }
}

async function parseRecipe(recipeString) {
  const lines = recipeString.split("\n");
  let section = "";
  const ingredients = [];
  const prep = [];
  const directions = [];

  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    } else if (line.startsWith("Directions")) {
      section = "directions";
    } else if (line.startsWith("Prep")) {
      section = "prep";
    } else if (line.startsWith("Ingredients")) {
      section = "ingredients";
    } else {
      switch (section) {
        case "directions":
          directions.push(line.trim());
          break;
        case "prep":
          prep.push(line.trim());
          break;
        case "ingredients":
          ingredients.push(line.trim());
          break;
      }
    }
  }

  ingredients.shift();
  prep.shift();
  directions.shift();

  const formattedIngredients = ingredients.join("&bladar&").replace("'","$apo$").replace(";","^col^").replace('"', "@inch@");
  const formattedPrep = prep.join("&bladar&").replace("'","$apo$").replace(";","^col^").replace('"', "@inch@");
  const formattedDirections = directions.join("&bladar&").replace("'", "$apo$").replace(";", "^col^").replace('"', "@inch@");
  
  const recipe = [formattedIngredients, formattedPrep, formattedDirections];
  return recipe;
}

async function getRecipeContent(file) {
  try {
    const octokit = new Octokit({});
    const response = await octokit.rest.repos.getContent({
      owner: "BlakeDarrow",
      repo: "DarrowRecipes",
      path: file.path,
    });
    const content = atob(response.data.content);
    const name = content.split("\n")[0].trim();
    const recipeDict = await parseRecipe(content);
    const category = "";
    const recipe = [
      name,
      recipeDict[0],
      recipeDict[1],
      recipeDict[2],
      category,
    ];
    return recipe;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function authenticateUser(password) {
  document.getElementById("error-message").style.display = "none";
  try {
    const octokit = await new Octokit({
      auth: password,
    });
    const response = await octokit.users.getAuthenticated();

    const rememberMe = document.getElementById("remember-me");

    if (rememberMe.checked) {
      setCookie("password", password, 365)
    } else {
      setCookie("password", "", 365)
    }
    
    document.getElementById("submit-form").style.display = "block";
    document.getElementById("authentication-form").style.display = "none";
  } catch (error) {
    if (error.name === "HttpError" && error.status === 401) {
      document.getElementById("error-message").innerHTML = "Invalid token!";
      document.getElementById("error-message").style.display = "block";
    } else {
      console.error(error);
      document.getElementById("error-message").innerHTML =
        "An error occurred. Please try again later.";
      document.getElementById("error-message").style.display = "block";
    }
  }
}

export async function commitFile(
  filepath,
  content,
  commitMessage,
  destinationName,
  password,
  workflowID
) {

  var progress = document.getElementById("progress");
  var progressBar = document.getElementById("progress-fill");
  progressBar.style.width = "0%";
  progressBar.style.display = "none";
  progress.style.display = "none";

  const defaultBranch = "main";
  const newBranch = `temp-${Date.now()}`;
  
  const octokit = new Octokit({
    auth: password,
  });

  const {
    data: { sha: latestCommitSha },
  } = await octokit.repos.getCommit({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: defaultBranch,
  });
  console.log("Get latest commit");

  const {
    data: { ref },
  } = await octokit.git.createRef({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: `refs/heads/${newBranch}`,
    sha: latestCommitSha,
  });
  console.log("Created new branch");

  const {
    data: { sha: blobSha },
  } = await octokit.git.createBlob({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    content: btoa(content),
    encoding: "base64",
  });
  console.log("Created new file");

  const {
    data: { sha: newTreeSha },
  } = await octokit.git.createTree({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    base_tree: latestCommitSha,
    tree: [
      {
        path: filepath,
        mode: "100644",
        type: "blob",
        sha: blobSha,
      },
    ],
  });

  const {
    data: { sha: newCommitSha },
  } = await octokit.git.createCommit({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    message: commitMessage,
    tree: newTreeSha,
    parents: [latestCommitSha],
  });
  console.log("Created new commit");

  await octokit.git.updateRef({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: `heads/${newBranch}`,
    sha: newCommitSha,
    force: false,
  });

  const {
    data: { number },
  } = await octokit.pulls.create({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    head: newBranch,
    base: defaultBranch,
    title: filepath,
    body: "automated merge",
  });
  console.log("Created pull request");

  await octokit.pulls.merge({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    pull_number: number,
    commit_title: commitMessage,
    sha: newCommitSha,
    merge_method: "squash",
  });
  console.log("Merged pull request");

  await octokit.pulls.update({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    pull_number: number,
    state: "closed",
  });
  console.log("Closed pull request");

  await octokit.git.deleteRef({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: `heads/${newBranch}`,
  });
  console.log("Deleted new branch");

  await monitorWorkflowStatus(octokit, 'BlakeDarrow', 'DarrowRecipes');
  
}

async function getAllWorkflowRuns(destinationName, password, workflowId) {
  const octokit = new Octokit({ auth: password });
  console.log(octokit)
  const response = await octokit.actions.listWorkflowRunsForRepo({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    workflow_id: workflowId,
  });
  console.log(response.data)
  const runIds = await response.data.workflow_runs.map((run) => run.id);
  return runIds;
}

async function deleteWorkflowRuns(runIds, destinationName, password, workflowId) {
  const octokit = new Octokit({ auth: password });
  for (const id of runIds) {
    await octokit.actions.deleteWorkflowRun({
      owner: destinationName.split("/")[0],
      repo: destinationName.split("/")[1],
      run_id: id,
    });
    console.log(`Deleted ${id} run`)
  }
}

export async function triggerDeleteWorkflowRuns(destinationName, password, workflowId) {
  console.log("Attempting to delete workflow runs")
  const runIds = await getAllWorkflowRuns(destinationName, password, workflowId);
  await deleteWorkflowRuns(runIds, destinationName, password, workflowId);
  console.log(`Deleted ${runIds.length} workflow runs`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function monitorWorkflowStatus(octokit, owner, repo) {
  try {
      await sleep(5000);

      var workflowRuns = await octokit.actions.listWorkflowRuns({
        owner: owner,
        repo: repo,
        workflow_id: "build-and-deploy.yml",
        per_page: 1
      });

      const id = workflowRuns.data.workflow_runs[0].check_suite_id
      console.log(id)
      console.log(workflowRuns)
    
      var progress = document.getElementById("progress");
      var progressBar = document.getElementById("progress-fill");
      var progressValue = 0;
      progressBar.style.width = progressValue + "%";
      progressBar.style.display = "block";
      progress.style.display = "block";

      const timer = setInterval(async () => {
        try {
          const { data: latestRun } = await octokit.request('GET /repos/{owner}/{repo}/check-suites/{check_run_id}/check-runs', {
            owner: owner,
            repo: repo,
            check_run_id: id
          })


          const buildStatus = latestRun.check_runs[0].status

          if (buildStatus === "completed") {
            const deployStatus = latestRun.check_runs[1].status
            console.log(`Build status: ${buildStatus}, Deploy status: ${deployStatus}`);

            progressBar.style.width = "100%";
            clearInterval(timer)
            
          } else {
            console.log(`Build status: ${buildStatus}, Deploy status: Not Started`);

            progressValue += 5
            progressBar.style.width = progressValue + "%";

          }

      } catch (error) {
        console.error(error);
      }
    }, 5000);

  } catch (error) {
    console.error(error);
  }
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let password = getCookie("password");
  if (password != "") {
    var passwordId = document.getElementById("password");
    passwordId.value = password;
  } else {
    console.log("No cookies found, not logged in")
  }
}