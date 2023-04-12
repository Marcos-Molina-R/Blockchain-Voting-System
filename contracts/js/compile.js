const path = require('path');   // trata rutas relativas
const fs = require('fs');       // lectura y escritura de archivos
const solc = require('solc');

const SCpath = path.join(__dirname, '../smartcontract.sol');
const code = fs.readFileSync(SCpath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'smartcontract.sol': {
            content: code
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output)

module.exports = {
    abi: output.contracts['smartcontract.sol'].Ballot.abi,
    bytecode: output.contracts['smartcontract.sol'].Ballot.evm.bytecode.object
}