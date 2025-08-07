const vscode = require("vscode");
const { buildHierarchy } = require("./build/buildHierarchy");
const { showMap } = require("./build/showMap");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codegraph.helloWorld",
      () => vscode.window.showInformationMessage("Hello World from CodeGraph!")
    ),
    vscode.commands.registerCommand("codegraph.foldersMap", buildHierarchy),
    vscode.commands.registerCommand("codegraph.filesMap", showMap)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
