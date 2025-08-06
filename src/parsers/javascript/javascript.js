module.exports = function parseJS(context) {
    const regex = /(?:import\s+.*?\s+from\s+['"](.+?)['"])|(?:require\(['"](.+?)['"]\))/g
    const matches = []

    let match;

    while ((match = regex.exec(context)) !== null) {
        matches.push(match[1] || match[2])
    }

    return matches
}