// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// async function main() {
//  const factory = await hre.ethers.getContractFactory("AwesomeGame");
//  const [owner] = await hre.ethers.getSigners();
//  const contract = await factory.deploy();
//  await contract.deployed();
//  console.log("Contract deployed to: ", contract.address);
//  console.log("Contract deployed by: ", owner.address, "\n");
//  console.log("Tokens have been minted successfully!");
// }
// main()
//  .then(() => process.exit(0))
//  .catch((error) => {
//  console.error(error);
//  process.exit(1);
//  });

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("AwesomeGameModule", (m) => {

const factory = m.contract("AwesomeGame");
//  const [owner] = m.Signers();
//  const contract = factory.deploy();
//  contract.deployed();
 console.log("Contract deployed to: ", factory.address);
//  console.log("Contract deployed by: ", owner.address, "\n");
//  console.log("Tokens have been minted successfully!");
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

  return { factory };
});
