const core = require('@actions/core');
const github = require('@actions/github');

try {
  const functionId = core.getInput('function-id');
  console.log(`functionId = ${functionId}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const headCommit = github.context.payload.head_commit.id;
  console.log(`Head commit: ${headCommit}`);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
