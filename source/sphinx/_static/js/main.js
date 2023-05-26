import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

document.getElementById("cancel-button").addEventListener("click", cancelCommit);

export function getRecipes(octokit) {
  getRstFileList(octokit).then((fileList) => {
    const listContainer = document.getElementById("file-list-container");
    var header =
      '<p class="caption" role="heading"><span class="caption-text">All Recipes</span></p>';
    listContainer.innerHTML = header + fileList;

    const elements = document.querySelectorAll('.toctree-l1');
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        const aElement = element.querySelector('.reference.internal');
        const onclickValue = aElement.getAttribute('onclick');
        const loadRecipe = onclickValue.replace("loadRecipe(", '').split("','");
        // console.log(loadRecipe);
      });
    });
  });
}

async function getRstFileList(octokit) {
  try {
    const response = await octokit.rest.repos.getContent({
      owner: "BlakeDarrow",
      repo: "DarrowRecipes",
      path: "source/sphinx/recipes",
    });

    const files = response.data.filter(
      (item) => item.type === "file" && item.name.endsWith(".rst")
    );

    const fileNames = await Promise.all(
      files.map((file) => getRecipeContent(file, octokit))
    );
    console.log("Built map of recipes.");
    
    const fileList = `<ol>${fileNames
      .map((recipeDict) => {
        return `<li class="toctree-l1"><a class="reference internal" onclick="loadRecipe('${recipeDict[0]}','${recipeDict[1]}','${recipeDict[2]}','${recipeDict[3]}','${recipeDict[4]}','${recipeDict[5]}')">${recipeDict[0]}</a></li>`
      })
      .join("")}</ol>`;
    
    console.log("Built navigation sidebar containing recipes.");
    
    return fileList;
  } catch (error) {
    console.error(error);
  }
}

async function parseRecipe(recipeString) {
  const lines = recipeString.split("\n");
  let section = "";
  let afterTags = "";
  const ingredients = [];
  const prep = [];
  const directions = [];
  const tags = [];

  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    } else if (line.startsWith("Directions")) {
      section = "directions";
    } else if (line.startsWith("Prep")) {
      section = "prep";
    } else if (line.startsWith("Ingredients")) {
      section = "ingredients";
    } else if (line.startsWith("------")) {
      section = "tags";
    } else {
        // Skip over any lines that don't match expected sections
      if (!section) {
        continue;
      }
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
        case "tags":
            const tagLine = line.trim().split(/[\s,]+/);
            const tagWords = tagLine.filter(word => word.startsWith("#"));
            const validTags = tagWords.filter(tag => tag.length > 1);
            tags.push(...validTags);
            section = "afterTags"; // set the section to afterTags
          break;
      case "afterTags":
          // concatenate the current line with afterTags and trim
          afterTags += line;
          break;
      }
    }
  }

  ingredients.shift();
  prep.shift();
  directions.shift();
  afterTags = afterTags.trim(); // need to test with both lines.
  const formattedAfterTags = afterTags.replaceAll("'", '^quote^').replaceAll("| ", '');
  var authorship = formattedAfterTags.split(".");
  authorship = authorship.filter(function (element) { return element !== ""; });

  if (authorship.length === 1 && authorship[0].includes("edited")) {
    authorship[0] = "Edited by Current user.";
    authorship[1] = "Recipe submitted prior to the generation of logs.";
    //console.log("Authorship only contained who edited last.")
  } else if (authorship.length === 0 ) {
    authorship[0] = "Edited by Current user.";
    authorship[1] = "Recipe submitted prior to the generation of logs.";
    //console.log("No existing edits, and submitted prior to generation of logs.")
  } else {
    authorship[1] = authorship[1] + "."
  }

  const formattedIngredients = ingredients
    .join("&bladar&")
    .replaceAll("'", "$apo$")
    .replaceAll(";", "^col^")
    .replaceAll('"', "@inch@")
    .replaceAll(/\r/g, "");
  const formattedPrep = prep
    .join("&bladar&")
    .replaceAll("'", "$apo$")
    .replaceAll(";", "^col^")
    .replaceAll('"', "@inch@")
    .replaceAll(/\r/g, "");
  const formattedDirections = directions
    .join("&bladar&")
    .replaceAll("'", "$apo$")
    .replaceAll(";", "^col^")
    .replaceAll('"', "@inch@")
    .replaceAll(/\r/g, "");
  
  const formattedTags = tags.join(", ").replaceAll("#", "");

  //var debugAuthor = ["Edited by Blake.", "Blake submitted ^quote^Chicken and Sausage Jambalaya^quote^ at 5:35:35 PM on 4-4-2023."];

  const recipe = [
    formattedIngredients,
    formattedPrep,
    formattedDirections,
    formattedTags,
    authorship,
  ];

 
  return recipe;
}

async function getRecipeContent(file, octokit) {
  try {
    const response = await octokit.rest.repos.getContent({
      owner: "BlakeDarrow",
      repo: "DarrowRecipes",
      path: file.path,
    });
    const content = atob(response.data.content);
    const name = content.split("\n")[0].trim();
    if (name === "Submit or edit a recipe") {
      return [];
    }
    const recipeDict = await parseRecipe(content);
    const recipe = [
      name,
      recipeDict[0],
      recipeDict[1],
      recipeDict[2],
      recipeDict[3],
      recipeDict[4],
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

    console.log("...successfully authenticated to GitHub!");

    const response = await octokit.users.getAuthenticated();

    getRecipes(octokit);

    const rememberMe = document.getElementById("remember-me");

    if (rememberMe.checked) {
      setCookie("password", password, 365);
      setCookie("remember-me", "True", 365);
    } else {
      setCookie("password", "", 365);
      setCookie("remember-me", "False", 365);
    }

    document.getElementById("submit-form").style.display = "block";
    document.getElementById("authentication-form").style.display = "none";

    if (getCookie("username") === "") {
      console.log("Prompting for username...");
      var userInput = prompt("Please enter your name:");
      setCookie("username", userInput, 365);
    }

    if (getCookie("username") !== "") {
      var username = getCookie("username");
      console.log(`Cookies found, welcome ${username}!`);
    }
    // start with auto-sizing enabled
    autosize('Ingredients');
    autosize('Prep');
    autosize('Directions');

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

let cancelFlag = false;

function cancelCommit(event) {
  event.preventDefault();
  cancelFlag = true;
  console.log("User is asking to cancel the operation...");
}

function cancelEvents() {
  console.log("...commit canceled successfully.");
  var status = document.getElementById("status");
  status.innerHTML = "Canceled.";
  document.getElementById("cancel-button").style.display = "none";
  cancelFlag = false;
}

export async function commitFile(
  filepath,
  content,
  commitMessage,
  destinationName,
  password,
  workflowID,
  commitDescription
) {

  document.getElementById("cancel-button").style.display = "block";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

  if (/[^\u0020-\u007F\u00A0-\u024F\u1E00-\u1EFF]/.test(content)) {
    var nonLatinChars = content.match(/[^\u0020-\u007F\u00A0-\u024F\u1E00-\u1EFF]/g);
    console.log("----------------");
    console.log("Non-Latin characters found: ", nonLatinChars);
    console.log("----------------");
  }
  
  var progress = document.getElementById("progress");
  var progressBar = document.getElementById("progress-fill");
  progressBar.style.width = "0%";
  progressBar.style.display = "none";
  progress.style.display = "none";

  var status = document.getElementById("status");
  status.style.display = "block";
  status.innerHTML = "Starting commit...";

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
  console.log("Fetching...");
  status.innerHTML = "Fetching...";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

  const {
    data: { ref },
  } = await octokit.git.createRef({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: `refs/heads/${newBranch}`,
    sha: latestCommitSha,
  });
  console.log("Created new branch.");
  status.innerHTML = "Created new branch...";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

  const {
    data: { sha: blobSha },
  } = await octokit.git.createBlob({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    content: btoa(content),
    encoding: "base64",
  });

  console.log("Created new blob.");
  status.innerHTML = "Created new blob.";
  
  if (cancelFlag) {
    cancelEvents();
    return;
  }

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

  console.log("Created tree.");
  status.innerHTML = "Created tree.";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

  const {
    data: { sha: newCommitSha },
  } = await octokit.git.createCommit({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    message: commitMessage,
    tree: newTreeSha,
    parents: [latestCommitSha],
  });
  console.log("Created commit.");
  status.innerHTML = "Created commit.";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

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
  status.innerHTML = "Created pull request.";

  if (cancelFlag) {
    cancelEvents();
    return;
  }

  console.log("User can no longer cancel recipe commit.")
  document.getElementById("cancel-button").style.display = "none";

  await octokit.pulls.merge({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    pull_number: number,
    commit_title: commitMessage,
    body: commitDescription,
    sha: newCommitSha,
    merge_method: "squash",
  });
  console.log("Recipe committed to main branch.");
  console.log(`${commitDescription}.`);
  status.innerHTML = "Recipe committed to main branch.";

  await octokit.pulls.update({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    pull_number: number,
    state: "closed",
  });
  console.log("Closed pull request.");
  status.innerHTML = "Closed pull request.";

  await octokit.git.deleteRef({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    ref: `heads/${newBranch}`,
  });
  console.log("Deleted temporary branch.");
  status.innerHTML = "Deleted temporary branch.";

  console.log("Recipe fully committed. Waiting to be deployed...");
  status.innerHTML = "Recipe fully committed. Waiting to be deployed...";

  document.getElementById("file-name").value = "";
  document.getElementById("Ingredients").value = "";
  document.getElementById("Prep").value = "";
  document.getElementById("Directions").value = "";
  document.getElementById("Category").value = "";
  document.getElementById("editedByValue").value = "";
  document.getElementById("submittedByValue").value = "";
  autosize('Ingredients');
  autosize('Prep');
  autosize('Directions');

  cancelFlag = false;
  console.log("Reset 'cancelFlag'");
  await monitorWorkflowStatus(octokit, "BlakeDarrow", "DarrowRecipes");
}

async function getAllWorkflowRuns(destinationName, password, workflowId) {
  const octokit = new Octokit({ auth: password });
  const response = await octokit.actions.listWorkflowRunsForRepo({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    workflow_id: workflowId,
  });
  const runIds = await response.data.workflow_runs.map((run) => run.id);
  return runIds;
}

async function deleteWorkflowRuns(
  runIds,
  destinationName,
  password,
  workflowId
) {
  const octokit = new Octokit({ auth: password });
  for (const id of runIds) {
    await octokit.actions.deleteWorkflowRun({
      owner: destinationName.split("/")[0],
      repo: destinationName.split("/")[1],
      run_id: id,
    });
    console.log(`Deleted ${id} run`);
  }
}

export async function triggerDeleteWorkflowRuns(
  destinationName,
  password,
  workflowId
) {
  console.log("Attempting to delete workflow runs...");
  const runIds = await getAllWorkflowRuns(
    destinationName,
    password,
    workflowId
  );
  await deleteWorkflowRuns(runIds, destinationName, password, workflowId);
  console.log(`Deleted ${runIds.length} workflow runs`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCurrentTime() {
  var now = new Date();
  
  var currentTimeUTC = now.toISOString();

  var datePart = currentTimeUTC.substr(0, 10);
  var timePart = currentTimeUTC.substr(11, 8);
  
  var formattedTime = datePart + 'T' + timePart + 'Z';

  return formattedTime;
}

function calculateDifference(lastRan) {
  var currentTime = getCurrentTime();

  var date1 = new Date(lastRan);
  var date2 = new Date(currentTime);

  var timeDifferenceMs = date2 - date1;
  var timeDifferenceSec = Math.floor(timeDifferenceMs / 1000);
  var timeDifferenceMin = Math.floor(timeDifferenceSec / 60);
  return timeDifferenceSec
}

export async function monitorWorkflowStatus(octokit, owner, repo) {
  try {
    var progress = document.getElementById("progress");
    var progressBar = document.getElementById("progress-fill");
    var progressValue = 1;
    progressBar.style.width = progressValue + "%";
    progressBar.style.display = "block";
    progress.style.display = "block";

    var timer = setInterval(async () => {
      try {
        var workflowRuns = await octokit.actions.listWorkflowRuns({
          owner: owner,
          repo: repo,
          workflow_id: "build-and-deploy.yml",
          per_page: 1,
        });
        var id = workflowRuns.data.workflow_runs[0].check_suite_id;
        var lastRan = workflowRuns.data.workflow_runs[0].run_started_at;
        var maxSec = 60;
        var dif = calculateDifference(lastRan);
        var status = document.getElementById("status");
        status.style.display = "block";
    
        var { data: latestRun } = await octokit.request(
          "GET /repos/{owner}/{repo}/check-suites/{check_run_id}/check-runs",
          {
            owner: owner,
            repo: repo,
            check_run_id: id,
          }
        );
        var buildStatus = latestRun.check_runs[0].status; // 1 being the deploy step
        console.info([dif + ' seconds stale.', workflowRuns, latestRun, "Build: " + buildStatus]);

        if ((buildStatus === "completed" && dif <= maxSec)) {
          console.log(`Website published!`);
          status.innerHTML = "Website published. Refresh to see new changes!";
          progressBar.style.width = "100%";
          clearInterval(timer);
          return
        }
        else if (dif <= maxSec || buildStatus !== "completed") { // last run was less than a minute ago, publishing
          console.log('Job in progress...')
          status.innerHTML = "Website being deployed...";
          progressValue += 1.5;
          progressBar.style.width = progressValue + "%";
        }
        else {
          console.log('Guessing progress value...')
          status.innerHTML = "Website being deployed...";
          progressValue += 1;
          progressBar.style.width = progressValue + "%";
        }
      }
      catch (error) {
      console.error(error);
      }
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
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
    console.log("No cookies found, not logged in.");
  }
}