const { showFolders } = require("./folders");
const { walk } = require("./listFiles");
const { parseFile } = require("./parseFile");
const path = require("path");

function setNested(obj, keys, value) {
    const lastKey = keys.pop();
    const nested = keys.reduce((o, key) => {
        if (!o[key]) o[key] = {};
        return o[key];
    }, obj);
    nested[lastKey] = value;
}

async function buildMap() {
    const folders = showFolders();
    if (!folders) return;

    const dependencyMap = {};

    for (const folder of folders) {
        const files = await walk(folder);

        for (const file of files) {
            const deps = parseFile(file);
            if (deps.length > 0) {
                const relativePath = path.relative(folder, file);
                const keys = relativePath.split(path.sep);
                setNested(dependencyMap, keys, deps);
            }
        }
    }

    return dependencyMap;
}

module.exports = { buildMap };


module.exports = { buildMap };
