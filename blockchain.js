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
}

module.exports = BlockChain;
