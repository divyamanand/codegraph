const fs = require("fs")
const path = require("path")
const { parseJS } = require('../parsers/javascript/javascript')

function parseFile(filePath) {
    const ext = path.extname(filePath)
    const content = fs.readFileSync(filePath, "utf-8")

    if (
        ext === ".js" ||
        ext === ".mjs" ||
        ext === ".ts" ||
        ext === ".jsx" ||
        ext === ".tsx"
    ) {
        return parseJS(content)
    } else {
        return []
    }
}

module.exports = { parseFile }
