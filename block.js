class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  //using toString function for debugging
  toString() {
    return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`;
  }

  static genesis() {
    return new this("Genesis time", "-----", "f1r57-h445h", []); //defult(dummy) value
  }

  //이전 블록 기반으로 제작
  static mineBlock(lastBlock, data) {
    const timestamp = Date.now(); //return milliseconds
    const lastHash = lastBlock.hash;
    const hash = "todo-hash";

    return new this(timestamp, lastHash, hash, data);
  }
}

module.exports = Block;
