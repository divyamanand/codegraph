const vscode = require("vscode");

function showFolders() {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders) {
    vscode.window.showErrorMessage("No folders opened");
    return [];
  }
  return folders.map(f => f.uri.fsPath);
}

module.exports = { showFolders };
