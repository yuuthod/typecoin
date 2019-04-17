"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "324234234234", "", "Hello", 333423);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map