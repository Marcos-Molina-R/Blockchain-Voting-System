const addressContract = '0xBb97D761C41A5C2B9168b2e3c8B6a834059c31E2';
const addressNft = '0xd0aeDF2694Fd77cc3A7Cdb2c6F65C2c0B6779DB0';

const abi = [
    {
      inputs: [ [Object] ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'Log',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'Log1',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'Log2',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'Log3',
      type: 'event'
    },
    {
      inputs: [],
      name: 'chairperson',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'giveRightToVote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'proposals',
      outputs: [ [Object], [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'vote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'voters',
      outputs: [ [Object], [Object], [Object], [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'winnerName',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'winningProposal',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    }
];

abinft = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [ [Object], [Object], [Object] ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object], [Object] ],
      name: 'ApprovalForAll',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object], [Object] ],
      name: 'Transfer',
      type: 'event'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'authorizeVoter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'balanceOf',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'getApproved',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'isApprovedForAll',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'isAuthorizedToVote',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'name',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'ownerOf',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object], [Object] ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object], [Object], [Object] ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'supportsInterface',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'tokenURI',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object], [Object], [Object] ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
];
/*
let web3;
let account; // cuenta de usuario (metamask)
let MyCoin; // instancia/objeto de nuestro smart contract

function init(){
    if(typeof window.ethereum !== 'undefined'){
        const metamaskBtn = document.getElementById('enableEthereumButton'); 
        metamaskBtn.classList.remove('d-none'); // si esta no definido, el boton esta oculto

        metamaskBtn.addEventListener('click', async() =>{
            const accounts = await ethereum.request({method:'eth_requestAccounts'}); // con una funcion request llamamos para pedir las cuentas
            account = accounts[0]; //pillamos la primera

            metamaskBtn.classList.add('d-none'); //oculto el boton
            document.getElementById('accountSelected').innerHTML = account; //generamos un elemento para ver la address
            document.getElementById('accountSelected').classList.add('border');

            detectChangeAccount();
            contract();

            document.getElementById('login').style.display ='none';
            document.getElementById('main').classList.remove('d-none');
        });
    }
}

function detectChangeAccount(){
    window.ethereum.on('accountChanged',function(accounts){
        console.log(accounts);
        account = accounts[0];
        document.getElementById('accountSelected').innerHTML = account.name;
    });
}

function contract() {
    web3 = new Web3(window.ethereum);
    MyCoin = new web3.eth.Contract(abi,addressContract);

    interact();
}

function interact(){
    const btnGetBalance = document.getElementById('btnGetBalance');
    btnGetBalance.addEventListener('click', () => {
        const address = document.getElementById('addressGetBalance');
        const value = address.value;

        MyCoin.methods.balanceOf(value).call().then(res =>{ //llamamos a call ya que es una operacion de lectura
            const amount = web3.utils.fromWei(res,'ether'); // wei tiene 18 decimales, por eso lo usa
            const valueSpan = document.getElementById('balanceSpan');
            valueSpan.innerHTML = amount;
        });
    });
}

windows.onload = init();

*/

let account;
let dni_hash;

const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    } else {
        document.getElementById("accountArea").innerHTML = "Debes descargarte metamask";
    }
}

const connectContract = async () => {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( abi, addressContract); 
    document.getElementById("contractArea").innerHTML = "connected to smart contract";
}

function getNumericHash(text) {
    const hash = CryptoJS.SHA256(text);
    const hashWords = hash.words.slice(0, 2); // Selecciona las primeras dos palabras (64 bits)
    const hashArrayBuffer = new ArrayBuffer(8);
    const hashDataView = new DataView(hashArrayBuffer);
    hashDataView.setInt32(0, hashWords[0], false);
    hashDataView.setInt32(4, hashWords[1], false);
    const hashBigInt = new BigInt64Array(hashArrayBuffer)[0];
    return hashBigInt;
  }
/**
const identifier = async () => {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( abinft, addressNft); 

    document.getElementById('dni_form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    
        const dni = document.getElementById('dni').value;
        dni_hash = parseInt(getNumericHash(dni));//CryptoJS.SHA256(dni);
        
        console.log('DNI:', dni);
        console.log('Hash:', dni_hash);//.toString(CryptoJS.enc.Hex));
        //console.log(dni_hash % 10);
        //const passDni = new BigUint64Array(1);
        //passDni[0] = dni_hash % 10;
        console.log("0");
        const numero = new Uint32Array(1);
        numero[0] = dni_hash;
        const gasEstimate = await window.contract.methods.authorizeVoter(numero).estimateGas({ from: account });
        console.log("1");
        const result = await window.contract.methods.authorizeVoter(numero).send({ gas: gasEstimate, from: account});
        document.getElementById("contractId").innerHTML = "Usuario autorizado";
    });
    
}
*/
document.addEventListener("DOMContentLoaded", function () {
    const dniForm = document.getElementById("dni-form");
    if (dniForm) {
      dniForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        identifier();
      });
    }
  });
  
async function identifier() {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( abinft, addressNft); 
    
    try {
      const dni = document.getElementById("dni").value;
      dni_hash = parseInt(getNumericHash(dni));
  
      console.log("DNI:", dni);
      console.log("Hash:", dni_hash);
      console.log("0");
      const numero = new Uint32Array(1);
      numero[0] = dni_hash;
      const gasEstimate = await window.contract.methods.authorizeVoter(numero).estimateGas({ from: account });
      console.log("1");
      const result = await window.contract.methods.authorizeVoter(numero).send({ gas: gasEstimate, from: account });
      document.getElementById("contractId").innerHTML = "Usuario autorizado";
    } catch (error) {
      console.error("Error al identificar:", error);
    }
}


const permission = async () => {
    const ethereumAddress = web3.utils.toChecksumAddress(account);
    const gasEstimate = await window.contract.methods.giveRightToVote(ethereumAddress).estimateGas({ from: account });
    const result = await window.contract.methods.giveRightToVote(ethereumAddress).send({ gas: gasEstimate, from: account });
    document.getElementById("permissionArea").innerHTML = "Permiso para votar obtenido";
  }
/*
const permission = async () => {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( abinft, addressNft); 

    const passDni = new Uint8Array(1);
    passDni[0] = dni_hash;
    
    if(window.contract.methods.isAuthorizedToVote([account],[passDni])){
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract( abi, addressContract); 
        console.log("0");
        const gasEstimate = await window.contract.methods.giveRightToVote().estimateGas({ from: account });
        console.log("1");
        const result = await window.contract.methods.giveRightToVote().send({ gas: gasEstimate, from: account});
        document.getElementById("permissionArea").innerHTML = "Permiso para votar obtenido";
    }else{
        document.getElementById("permissionArea").innerHTML = "No tienes permiso para votar";
    }
    /**
    await window.contract.methods.giveRightToVote(account).send({ from: account });
    document.getElementById("permissionArea").innerHTML = "Permiso para votar obtenido";
    */
//}

const vote = async () => {
    //window.web3 = await new Web3(window.ethereum);
    //window.contract = await new window.web3.eth.Contract( abi, addressContract); 
    const selectedCandidate = document.getElementById("candidatos").value;
    console.log("Candidato seleccionado:", selectedCandidate);

    
    const numero = new Uint8Array(1);
    numero[0]=selectedCandidate;
    console.log("0");
    //window.contract.events.allEvents({ fromBlock: 'latest' }, console.log)
    const gasEstimate = await window.contract.methods.vote(numero)//.estimateGas({ from: account });
    console.log(gasEstimate);
    await window.contract.methods.vote(numero).send({ gas: gasEstimate,from: account });

    /*window.contrac.events.Log()
    .on('data', function(event){
        console.log(event);
    });*/
    //console.log(window.contract.proposals);
    
    const data = await window.contract.methods.winnerName().call().then(console.log);
    console.log("1");
    document.getElementById("voteArea").innerHTML = web3.utils.toAscii(data);// toUtf8, hexToUtf8, toAscii, hexToAscii, hexToString
}