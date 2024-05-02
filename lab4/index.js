const Web3 = require('web3');
const abi = require('./artifacts/contracts/ballot.sol/Ballot.json');
let web3, accounts, addVoter, fetchWinner;
window.addEventListener("load",async()=>{
    if(window.ethereum){
        web3=new Web3(window.ethereum);
        try{
        await window.ethereum.enable();
        }catch(error){
        console.error(error);
        }
        accounts=await web3.eth.getAccounts();
        ballotContract= new web3.eth.contract(abi,
        "0xf16095EEFBA8B88fe92180c1aca76B17ea68B101", {from:
        accounts[0]});
        console.log("Accounts:", accounts);
        alert("Signed in with: "+accounts[0]);
        }else{
        alert("Metamask Not Installed");
        }
        })
        addVoter = document.getElementById('addVoter');
        fetchWinner = document.getElementById('fetchWinner');
        //update the addVoter click listener to add a voter on the click

        addVoter.addEventListener("click",async()=>{
        await
        ballotContract.methods.giveRightToVote(document.getElementById('voter_new').value).send({from: accounts[0],}).on('transactionHash',
        function(hash){
            alert("Transaction Hash: ",+hash);
})
.on('confirmation', function(confirmationNumber, receipt){
})
.on('receipt', function(receipt){
console.log(receipt);
})
.on('error', function(error, receipt){
console.log(error);
})
})
//Call the function to find the winner using fetch Winner button
fetchWinner.addEventListener("click", async () => {
const winner = await
ballotContract.methods.winnerName().call({from: accounts[0]});
document.getElementById('winner').innerText = winner;
})
