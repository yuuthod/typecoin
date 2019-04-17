"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// static method : class가 생성되지 않아도 사용할 수 있는 method
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "324234234234", "", "Hello", 333423);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLatestBlock();
    const newIndex = previosBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map