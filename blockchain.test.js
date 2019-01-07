const Blockchain = require("./blockchain");
const Block = require("./block");
describe(`Blockchain`, () => {
  let bc;

  beforeEach(() => {
    bc = new Blockchain(); //refreshing blockchain instance to new one
  });

  it("starts with the genesis block", () => {
    expect(bc.chain[0]).toEqual(Block.genesis()); //the first element == genesis block
  });

  it(`adds a new block`, () => {
    const data = `foo`;
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data); //the last element
  });
});
