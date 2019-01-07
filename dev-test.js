//explore block class
const Block = require("./block");

// const block = new Block("timestamp", "lastHash", "hash", "data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), "this is real data");
console.log(fooBlock.toString());
