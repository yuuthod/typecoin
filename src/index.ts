import * as CryptoJS from "crypto-js";

class Block {
    public index:number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number; 

    // static method : class가 생성되지 않아도 사용할 수 있는 method
    static calculateBlockHash = (
        index:number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    constructor(
        index:number,
        hash:string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}


const genesisBlock:Block = new Block(0, "324234234234", "", "Hello", 333423);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);


const createNewBlock = (data:string) : Block => {
    const previosBlock: Block = getLatestBlock();
    const newIndex : number = previosBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(
        newIndex, 
        previosBlock.hash,
        newTimestamp, 
        data
    );
    const newBlock : Block = new Block(
        newIndex, 
        newHash, 
        previosBlock.hash, 
        data, 
        newTimestamp
    );
    addBlock(newBlock);
    return newBlock;
}

const getHashforBlock = (aBlock: Block) : string => 
    Block.calculateBlockHash(
        aBlock.index,
        aBlock.previousHash, 
        aBlock.timestamp, 
        aBlock.data
    );
    
const isBlockValid = (candidateBlock : Block, previosBlock: Block) : boolean => {
    // 블록의 구조가 유효한지 체크
    if(!Block.validateStructure(candidateBlock)) {
        return false;
    } else if(previosBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if(previosBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock: Block) : void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block"); 

console.log(blockchain);

export {};