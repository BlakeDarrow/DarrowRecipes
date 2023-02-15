import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

export async function authenticateUser(password) {
    document.getElementById("error-message").style.display = "none";
    try {
        const octokit = await new Octokit({
        auth: password
        });
        const response = await octokit.users.getAuthenticated();
        document.getElementById("submit-form").style.display = "block";
        document.getElementById("authentication-form").style.display = "none";
    } catch (error) {
        if (error.name === 'HttpError' && error.status === 401) {
        document.getElementById("error-message").innerHTML = 'Invalid token!';
        document.getElementById("error-message").style.display = "block";
        } else {
        console.error(error);
        document.getElementById("error-message").innerHTML = 'An error occurred. Please try again later.';
        document.getElementById("error-message").style.display = "block";
        }
    }
}

export async function commitFile(filepath, content, commitMessage, destinationName, password, workflowID) {

    monitorWorkflowStatusChanges(destinationName, password, workflowID)

    const defaultBranch = "main";
    const newBranch = `temp-${Date.now()}`;

    const octokit = new Octokit({
        auth: password,
    });

    const { data: { sha: latestCommitSha } } = await octokit.repos.getCommit({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        ref: defaultBranch
    });
    console.log("Get latest commit");

    const { data: { ref } } = await octokit.git.createRef({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        ref: `refs/heads/${newBranch}`,
        sha: latestCommitSha
    });
    console.log("Created new branch");

    const { data: { sha: blobSha } } = await octokit.git.createBlob({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        content: btoa(content),
        encoding: "base64"
    });
    console.log("Created new file");

    const { data: { sha: newTreeSha } } = await octokit.git.createTree({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        base_tree: latestCommitSha,
        tree: [{
            path: filepath,
            mode: "100644",
            type: "blob",
            sha: blobSha
        }]
    });

    const { data: { sha: newCommitSha } } = await octokit.git.createCommit({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        message: commitMessage,
        tree: newTreeSha,
        parents: [latestCommitSha]
    });
    console.log("Created new commit");

    await octokit.git.updateRef({
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        ref: `heads/${newBranch}`,
        sha: newCommitSha,
        force: false
    });

    const { data: { number } } = await octokit.pulls.create({
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
        merge_method: "squash"
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

    var progress = document.getElementById("progress");
    var progressBar = document.getElementById("progress-fill");
    
    var progressValue = 0;
    progressBar.style.width = progressValue + "%";
    progressBar.style.display = "block"
    progress.style.display = "block"

}

export async function monitorWorkflowStatusChanges(destinationName, password, workflowId) {
  var progress = document.getElementById("progress");
  var progressBar = document.getElementById("progress-fill");
  
  var progressValue = 0;
  progressBar.style.width = progressValue + "%";
  progressBar.style.display = "block"
  progress.style.display = "block"

  var octokit = new Octokit({ auth: password });

  var first_run = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    workflow_id: workflowId,
    per_page: 1,
  });

  var lastID = first_run.data.workflow_runs[0].id;
  console.log("Begin waiting for workflow completion...")
  console.log(`First ID ${lastID}`)

  while (true) {

    var octokit = new Octokit({ auth: password });

    var runs = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
        owner: destinationName.split("/")[0],
        repo: destinationName.split("/")[1],
        workflow_id: workflowId,
        per_page: 1,
    });
    
    var currentID = runs.data.workflow_runs[0].id;

    progressValue += 1
    progressBar.style.width = progressValue + "%";
    // console.log(lastID)
    // console.log(currentID)

    if (currentID !== lastID) {
      console.log(`Workflow ID ${workflowId} changed to ${currentID}`);
      lastID = currentID;
      progressBar.style.width = "100%";
      break  
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

async function getAllWorkflowRuns(destinationName, password, workflowId) {
  const octokit = new Octokit({ auth: password });
  const response = await octokit.actions.listWorkflowRunsForRepo({
    owner: destinationName.split("/")[0],
    repo: destinationName.split("/")[1],
    workflow_id: workflowId,
  });
  const runIds = response.data.workflow_runs.map((run) => run.id);
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
  }
}

export async function triggerDeleteWorkflowRuns(destinationName, password, workflowId) {
  const runIds = await getAllWorkflowRuns(destinationName, password, workflowId);
  await deleteWorkflowRuns(runIds, destinationName, password, workflowId);
  console.log(`Deleted ${runIds.length} workflow runs`);
}