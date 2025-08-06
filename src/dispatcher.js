const fs = require("fs")
const path = require("path")
const jsParser = require('./parsers/javascript/javascript')


function parseFile(filePath) {
    const ext = path.extname(filePath)
    const content = fs.readFileSync(filePath, "utf-8")

    switch (ext) {
        case ".js":
        case ".mjs":
        case ".ts":
            return jsParser(content)
        
        default:
            return []
    }
}

