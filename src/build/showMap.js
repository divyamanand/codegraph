const { buildMap } = require("./buildMap");

async function showMap() {
  const map = await buildMap();
  return map
}

module.exports = { showMap };
