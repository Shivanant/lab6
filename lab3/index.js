const Web3 = require('web3');

let web3, accounts;

window.addEventListener("load", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            accounts = await web3.eth.getAccounts();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("MetaMask Not Installed");
    }
});

const valueInput = document.getElementById('value');
const recipientInput = document.getElementById('recipient');
const sendTransactionBtn = document.getElementById('sendTransactionBtn');

sendTransactionBtn.addEventListener("click", async () => {
    if (!web3 || !accounts || !accounts.length) {
        console.error("Web3 or accounts not initialized");
        return;
    }

    const weiValue = web3.utils.toWei(valueInput.value, 'ether');
    const recipient = recipientInput.value;
    web3.eth.sendTransaction({
        from: accounts[0],
        to: recipient,
        value: weiValue
    })
    .on('transactionHash', function(hash) {
        alert("Transaction Hash: " + hash);
    })
    .on('receipt', function(receipt) {
        console.log(receipt);
    })
    .on('error', console.error);
});
