const path = require("path");
const fs = require("fs");
const ignore = require("ignore");

function loadGitignore(basePath) {
    const gitignorePath = path.join(basePath, ".gitignore");

    if (!fs.existsSync(gitignorePath)) return null;

    const ig = ignore();
    const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
    ig.add(gitignoreContent);

    return ig;
}

function walk(dir, files = [], baseDir = dir, ig = null) {
    if (!ig) ig = loadGitignore(baseDir) || ignore();

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const relative = path.relative(baseDir, fullPath);

        if (ig.ignores(relative)) continue;

        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, files, baseDir, ig);
        } else {
            files.push(fullPath);
        }
    }

    return files;
}

module.exports = { walk };
