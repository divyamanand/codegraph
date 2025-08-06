
const vscode = require("vscode");
const {showFolders} = require("./folders") 

function activate(context) {
  const helloCommand = vscode.commands.registerCommand(
    "codegraph.helloWorld",
    () => vscode.window.showInformationMessage("Hello World from CodeGraph! Welcome!")
  );

  const foldersCommand = vscode.commands.registerCommand(
    "codegraph.showFolders",
    showFolders 
  );

  context.subscriptions.push(helloCommand, foldersCommand);
}

function deactivate() {}

module.exports = { activate, deactivate };
