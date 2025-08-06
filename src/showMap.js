const vscode = require("vscode");
const { buildMap } = require("./buildMap");

async function showMap() {
  const map = await buildMap();
  const out = vscode.window.createOutputChannel("CodeGraph Dependencies");
  out.clear();
  out.appendLine(JSON.stringify(map, null, 2));
  out.show(true);
}

module.exports = { showMap };
