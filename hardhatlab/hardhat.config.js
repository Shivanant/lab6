require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-toolbox"); 


/** @type import('hardhat/config').HardhatUserConfig */
// in its dashboard, and replace "KEY" with it 
const INFURA_API_KEY = "bc2fbb128d01423dbbe32585eeddd39c"; 
// Replace this private key with your Sepolia account private key 
// To export your private key from Coinbase Wallet, go to 
// Settings > Developer Settings > Show private key 
// To export your private key from Metamask, open Metamask and 
// go to Account Details > Export Private Key 
// Beware: NEVER put real Ether into testing accounts 
const SEPOLIA_PRIVATE_KEY = "224f5242304c3ed1973182e195ed6512eecf2c42382d1d18de1b821c046f9511"; 
module.exports = { 
solidity: "0.8.23", 
networks: { 
sepolia: { 
url: 
`https://sepolia.infura.io/v3/${INFURA_API_KEY}`, 
accounts: [SEPOLIA_PRIVATE_KEY] 
} 
} 
}; 