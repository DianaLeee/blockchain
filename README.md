# 블록 생성

- 블록
  4가지 기본요소

1. timestamp - 언제만들어졌는지 기록하기 위해. JS Date객체 이용
2. lastHash - the hash of the block before it
3. hash - generated based on its on data
4. data to store

# Genesis Block

- the origin of the blockchain.
- timestamp, lastHash, hash, data에 대한 dummy value를 가지고 있음.

# Block Hashes

- using SHA256 algorithm (32byte==256bits, one way hash)

## crypto-js

`npm i crypto-js --save`

```JS
const SHA256 = require("crypto-js/sha256");
...
SHA256("something to hash blah blah blah");
```

## jest

- `npm i jest --save-dev`
- 자바스크립트 테스트 도구
- able to execute test file
- `describe(name, fn)` creates a block that groups together several related tests.
- `beforeEach(fn, timeout)` Runs a function before each of the tests in this file runs.
- `it(name, fn, timeout)` == `test(name, fn, timeout)` Runs a test.
- `expect(value)` The expect function is used every time you want to test a value.

## Multiple Chain Validation

Miners will each have their own version of the chain.
한사람이 체인에 새 블록을 연결하면, 전체 시스템에 업데이트되어야함
모두가 일관성있게 업데이트된 카피를 지녀야함
그렇지만 새 블록이 유효하고 accepted되었다는 validation 필요함..

### longer chains

### Hash Validation

## Peer-to-peer Server

individual peer가 어떻게 행동해야 하는가?

1. The first app to start peer-to-peer server
   (wait for other peers/connections)
2. A later server, connecting to the original peer to peer server

p2p서버 그 자체로 1, 2 기능 모두 할것.

- p2p 서버 제작
- socket 통신
- 블록체인 동기화 필요

## Proof of Work System

- A system that requires miners to do computational work to add blocks.
- Any peer can replace the blockchain
- The PoW make it expensive to generate corrupt chains.

- Hashcash... pow system to prevent email spamming.
- adjust "nonce" value to generate hashes. Generate hashes until a one with the matching leading 0's is found.

- The difficulty sets a rate of mining.

### 51% Attack

- A dishonest miner has more than 51% of the network's power.
- have power to replace the current block chain (longer chain == main chain)

### Dynamic Block Difficulty

- Add difficulty attribute to each block
- Set Time value (Mine rate)
- Difficulty ddjustment machanism
  1. check the timestamp of the newly mined block
  2. compare to the time set of the previously mined block
  3. Difference in timestamps between blocks, if bigger than mine rate => mined too slowly => Therefore, Difficulty -1
