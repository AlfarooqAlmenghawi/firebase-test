const countdata = require("../data/index.js");
const seed = require("./seed.js");
const db = require("../connection.js");

const runSeed = () => {
  return seed(countdata).then(() => db.end());
};

runSeed();
