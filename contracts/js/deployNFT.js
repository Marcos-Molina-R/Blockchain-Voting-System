const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');
const { abi, bytecode } = require('./compileNFT');
console.log("abi: ");
console.log(abi);

const mnemonic = 'input abuse toe slender popular cloud leaf disorder project company purchase despair';
const provider = new HDWalletProvider(mnemonic, 'ws://127.0.0.1:7545')

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const contract = new web3.eth.Contract(abi);
    //console.log("2");
    const gasEstimate = await contract.deploy({ data: '0x' + bytecode }).estimateGas({ from: accounts[0] });
    //console.log("3");
    const result = await contract.deploy({ data: '0x' + bytecode}).send({ gas: gasEstimate, from: accounts[0] });
    //console.log("4");

    //console.log(result);
    console.log("Contract deployed to: ", result.options.address);
};
deploy();