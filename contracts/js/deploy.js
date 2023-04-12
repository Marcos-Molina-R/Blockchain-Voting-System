//const HDWalletProvider = require('truffle-hdwallet-provider');//@truffle/hdwallet-provider
const HDWalletProvider = require('@truffle/hdwallet-provider');
//const hre = require("hardhat");
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');
console.log("abi: ");
console.log(abi);
//console.log(bytecode);

const mnemonic = 'input abuse toe slender popular cloud leaf disorder project company purchase despair';
const provider = new HDWalletProvider(mnemonic, 'ws://127.0.0.1:7545')

const web3 = new Web3(provider);

//console.log(web3.currentProvider);

const padToBytes32 = (str) => {
    return web3.utils.padRight(web3.utils.asciiToHex(str), 64); // asi consigo transformar a byte32 los strings
  };

const deploy = async () => {
    //const accounts = await web3.eth.getAccounts();
    //const accounts = ['0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1']
    //const accounts = web3.eth.accounts;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    

    const argumentsConstructor = [ padToBytes32("candidato1"), padToBytes32("candidato2"), padToBytes32("candidato3") ];
    //console.log(argumentsConstructor); // ? ;
    

    //const result = await new web3.eth.Contract(abi).deploy({data:bytecode, arguments: argumentsConstructor}).send({ gas: gasEstimate, from: accounts[0]});
    //const result = await web3.eth.contract(abi).new({data:bytecode, arguments: argumentsConstructor}, { gas: gasEstimate, from: accounts[0]});
    //console.log("1");
    const contract = new web3.eth.Contract(abi);
    //console.log("2");
    const gasEstimate = await contract.deploy({ data: '0x' + bytecode, arguments: [argumentsConstructor] }).estimateGas({ from: accounts[0] });
    //console.log("3");
    const result = await contract.deploy({ data: '0x' + bytecode, arguments: [argumentsConstructor] }).send({ gas: gasEstimate, from: accounts[0] });
    //console.log("4");

    //console.log(result);
    console.log("Contract deployed to: ", result.options.address);
};
deploy();

// 0x93565f8a90452a5c1f043138637009f54087dd53