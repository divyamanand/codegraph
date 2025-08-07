const { showFolders } = require("./folders");
const { walk } = require("./listFiles");
const { parseFile } = require("./parseFile");
const path = require("path");

/**
 * Build a dependency map, only including valid local file imports.
 */
async function buildMap() {
  const roots = showFolders();
  if (!roots || roots.length === 0) return {};

  const dependencyMap = {};

  for (const root of roots) {
    const allFiles = walk(root).map(f => path.resolve(f));
    const filesSet = new Set(allFiles);

    for (const file of allFiles) {
      const rawDeps = parseFile(file);

      const filteredDeps = rawDeps.reduce((acc, imp) => {
        const base = path.resolve(path.dirname(file), imp);

        const candidates = [
          base,
          base + ".js",
          base + ".ts",
          base + ".jsx",
          base + ".tsx",
          base + ".mjs",
          path.join(base, "index.js"),
          path.join(base, "index.ts"),
          path.join(base, "index.jsx"),
          path.join(base, "index.tsx"),
          path.join(base, "index.mjs"),
        ];

        const match = candidates.find(c => filesSet.has(c));
        if (match) {
          const rel = path.relative(root, match);
          acc.push(rel);
        }

        return acc;
      }, []);

      if (filteredDeps.length > 0) {
        const relFile = path.relative(root, file);
        dependencyMap[relFile] = filteredDeps;
      }
    }
  }

  return dependencyMap;
}

module.exports = { buildMap };
