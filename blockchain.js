const Block = require("./block");

class BlockChain {
  constructor() {
    this.chain = [Block.genesis()]; //give genesis block
  }

  addBlock(data) {
    //need lastBlock as input
    //const lastBlock = this.chain[this.chain.length - 1]; //grab one that is currently at the end of the chain
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data); //(lastBlock, data)
    this.chain.push(block);

    return block;
  }

  isValidChain(chain) {
    //chain means incoming chain
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i]; //current block
      const lastBlock = chain[i - 1];

      if (
        block.lastHash !== lastBlock.hash ||
        block.hash !== Block.blockHash(block)
      ) {
        return false;
      }
    }
    return true;
  }

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log("Received chain is not longer than the current chain");
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log("The recieved chain is not valid.");
      return;
    }
    console.log("Replacing blockchain with the new chain");
    this.chain = newChain;
  }
}

module.exports = BlockChain;
