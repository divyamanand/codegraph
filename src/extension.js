const vscode = require("vscode");
const { buildHierarchy } = require("./build/buildHierarchy");
const { showMap } = require("./build/showMap");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codegraph.helloWorld",
      () => vscode.window.showInformationMessage("Hello World from CodeGraph!")
    ),

    vscode.commands.registerCommand("codegraph.foldersMap", async () => {

      const mapp = await showMap()

      console.log(mapp)
      console.log(mapp.files)
      console.log(mapp.folders)

      const srcRoot = {
      name: "project-root",
      folders: mapp.folders,
      files: mapp.files
    };

      const { parentMap, childrenMap } = buildHierarchy(srcRoot);

      const out = vscode.window.createOutputChannel("CodeGraph Dependencies");
      out.clear();
      out.appendLine("📂 Parent Map:\n" + JSON.stringify(parentMap, null, 2));
      out.appendLine("\n📁 Children Map:\n" + JSON.stringify(childrenMap, null, 2));
      out.show(true);
    }),


    vscode.commands.registerCommand("codegraph.filesMap", async () => {
      const map = await showMap()
      const out = vscode.window.createOutputChannel("CodeGraph Dependencies");
      out.clear();
      out.appendLine(JSON.stringify(map, null, 2))
      out.show(true)
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
