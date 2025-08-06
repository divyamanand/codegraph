const vscode = require("vscode");
const { showFolders } = require("./folders");
const { showMap } = require("./showMap");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codegraph.helloWorld",
      () => vscode.window.showInformationMessage("Hello World from CodeGraph!")
    ),
    vscode.commands.registerCommand("codegraph.showFolders", showFolders),
    vscode.commands.registerCommand("codegraph.filesMap", showMap)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
