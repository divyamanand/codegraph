import vscode from "vscode"

function showFolders() {

        const folders = vscode.workspace.workspaceFolders;

        if (!folders) {
            vscode.window.showErrorMessage("No folders opened")
            return
        }

        const folderPaths = folders.map(folder => folder.uri.fsPath);
        vscode.window.showInformationMessage('Folders:\n' + folderPaths.join("\n"))
        console.log("Opened folders", folderPaths)
    }

export {showFolders}