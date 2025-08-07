const { showFolders } = require("../folders");
const { walk } = require("./listFiles");
const { parseFile } = require("../parseFile");
const path = require("path");

const VALID_EXTENSIONS = [".js", ".ts", ".jsx", ".tsx", ".mjs"];

function setNested(map, filePath, deps) {
    const parts = filePath.split(path.sep);
    const fileName = parts.pop(); // Last part is file name
    let curr = map;

    for (const part of parts) {
        if (!curr.folders) curr.folders = {};
        if (!curr.folders[part]) curr.folders[part] = {};
        curr = curr.folders[part];
    }

    if (!curr.files) curr.files = {};
    curr.files[fileName] = { imports: deps };
}

async function buildMap() {
    const folders = showFolders();
    if (!folders) return;

    const dependencyMap = {};

    for (const folder of folders) {
        const files = await walk(folder);

        for (const file of files) {
            const ext = path.extname(file);
            if (!VALID_EXTENSIONS.includes(ext)) continue;

            const deps = parseFile(file);
            if (deps.length > 0) {
                const relativePath = path.relative(folder, file);
                setNested(dependencyMap, relativePath, deps);
            }
        }
    }

    return dependencyMap;
}

module.exports = { buildMap };
