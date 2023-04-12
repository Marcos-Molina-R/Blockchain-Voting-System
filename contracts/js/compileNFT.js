const path = require('path');   // trata rutas relativas
const fs = require('fs');       // lectura y escritura de archivos
const solc = require('solc');
//const solcImport = require('solc-import');

//const SCpath = path.join(__dirname, '../authorization.sol');
//const code = fs.readFileSync(SCpath, 'utf8');

const contractPath = path.resolve(__dirname, '..', 'authorization.sol');

/*
const findImport = (path) => {
    const content = fs.readFileSync(path, 'utf8');
    return { contents: content };
  };*/

const findImports = (importPath) => {
    try {
        const resolvedPath = path.resolve(__dirname, '..','..', importPath);
        const content = fs.readFileSync(resolvedPath, 'utf8');
        return { contents: content };
    } catch (error) {
        console.error('Error al leer el archivo importado:', importPath);
        console.error(error);
        return { error: error.message };
    }
};

const input = {
    language: 'Solidity',
    sources: {
        'authorization.sol': {
            content: fs.readFileSync(contractPath, 'utf8'),//code
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

//const output = JSON.parse(solc.compile(JSON.stringify(input)));
//const output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));
const output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));

console.log(output)

module.exports = {
    abi: output.contracts['authorization.sol'].VotingAuthorizationNFT.abi,
    bytecode: output.contracts['authorization.sol'].VotingAuthorizationNFT.evm.bytecode.object
}