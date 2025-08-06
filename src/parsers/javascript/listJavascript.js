const path = require("path");
const fs = require("fs");

async function listFiles(dir, files = []) {

    const items = fs.readdirSync(dir)

    for (const item of items) {
        const fullPath = path.join(dir, item)
        if (fs.statSync(fullPath).isDirectory()) {
            if (item === "node_modules") continue;
            listFiles(fullPath, files);
        } else {
            files.push(fullPath)
        }
    }

    return files

}

module.exports = {listFiles}