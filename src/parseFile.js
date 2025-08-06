const fs = require("fs")
const path = require("path")
const {parseJS} = require('./parsers/javascript/javascript')


function parseFile(filePath) {
    const ext = path.extname(filePath)
    const content = fs.readFileSync(filePath, "utf-8")

    switch (ext) {
        case ".js":
        case ".mjs":
        case ".ts":
        case ".jsx":
        case ".tsx":
            return parseJS(content)
        
        default:
            return []
    }
}


module.exports = {parseFile}
