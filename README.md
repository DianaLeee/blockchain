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
