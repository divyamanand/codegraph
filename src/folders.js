const vscode = require("vscode");

function showFolders() {
    const folders = vscode.workspace.workspaceFolders;

    if (!folders) {
        return vscode.window.showErrorMessage("No folders opened");
    }

    const folderPaths = folders.map(folder => folder.uri.fsPath);
    vscode.window.showInformationMessage('Folders:\n' + folderPaths.join("\n"));
    console.log("Opened folders", folderPaths);

    return folderPaths
}

module.exports = { showFolders };
