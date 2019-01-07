//explore block class
const Block = require("./block");

const block = new Block("timestamp", "lastHash", "hash", "data");
console.log(block.toString());
console.log(Block.genesis().toString());
