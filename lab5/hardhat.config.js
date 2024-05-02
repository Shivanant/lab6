require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.g.alchemy.com/v2/iFWl2tTT95CpAmBb9gI-VAMzIexz_NHO",
      apiKey: "iFWl2tTT95CpAmBb9gI-VAMzIexz_NHO",
      accounts: ["224f5242304c3ed1973182e195ed6512eecf2c42382d1d18de1b821c046f9511"]
    }
  }
};
