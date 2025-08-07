const vscode = require("vscode");
const { buildMap } = require("./buildMap");
const { buildNestedMap } = require("./nestedMap"); 

async function showMap() {
  const flatMap = await buildMap();                
  const nestedMap = buildNestedMap(flatMap);      

  const out = vscode.window.createOutputChannel("CodeGraph Dependencies");
  out.clear();
  out.appendLine(JSON.stringify(nestedMap, null, 2)); 
  out.show(true);
}

module.exports = { showMap };
