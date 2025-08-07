
function buildHierarchy(node, parent = null, parentMap = {}, childrenMap = {}) {
  if (parent !== null) parentMap[node.name] = parent;
  childrenMap[node.name] = [];
  if (node.files) {
    for (let fname in node.files) {
      parentMap[fname] = node.name;
      childrenMap[node.name].push(fname);
      childrenMap[fname] = [];
    }
  }
  if (node.folders) {
    for (let sub in node.folders) {
      childrenMap[node.name].push(sub);
      buildHierarchy({ name: sub, ...node.folders[sub] },
                     node.name, parentMap, childrenMap);
    }
  }
  return { parentMap, childrenMap };
}

module.exports = {buildHierarchy}

