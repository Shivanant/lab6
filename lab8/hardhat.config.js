require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
  hardhat: {},
  sepolia: {
 url: process.env.REACT_APP_ALCHEMY_API_URL,
 accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
  }
  },
};


// require('dotenv').config();
// require("@nomicfoundation/hardhat-toolbox");
// const { API_URL, PRIVATE_KEY } = process.env;
// module.exports = {

// }