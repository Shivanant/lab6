// Importing the Alchemy SDK
const { Network, Alchemy, Wallet, Utils } = require("alchemy-sdk");
// Importing dotenv to read the API key from the .env file
const dotenv = require("dotenv");
dotenv.config();
// Reading the API key and private key from the .env file
const { API_KEY, PRIVATE_KEY } = process.env;
// Configuring the Alchemy SDK
const settings = {
 apiKey: API_KEY, // Replace with your API key.
 network: Network.ETH_SEPOLIA, // Replace with your network.
};
// Creating an instance of the Alchemy SDK
const alchemy = new Alchemy(settings);
async function main() {
 // Creating a wallet instance to send the transaction
 const wallet = new Wallet(PRIVATE_KEY, alchemy);
 // Replace with the address you want to send the tokens to
 const toAddress = "0xafaF84B9938b31B357DAdDe97e38772B63fcaE92";
 // USDC contract address on Sepolia testnet
 const usdcContractAddress = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
 // Using `getFeeData` method of Alchemy SDK to get the fee data (maxFeePerGas &
//maxPriorityFeePerGas) that will be used in the transaction object
 const feeData = await alchemy.core.getFeeData();
 // ABI for the transfer function of ERC20 token
 // Every ERC20 contract has this function and we are going to use it to transfer the
//tokens
 const abi = ["function transfer(address to, uint256 value)"];
 // Amount of tokens to send: Here we will send 2 USDC tokens
 const amountToSend = 2;
 // Decimals for USDC token: 6
 const decimals = 6;
 // Convert the amount to send to decimals (6 decimals for USDC)
 const amountToSendInDecimals = amountToSend * 10 ** decimals;
 // Create the data for the transaction -> data that tells the transaction what to do
//(which function of the contract to call, what parameters to pass etc.)
 // Create an interface object from the ABI to encode the data
 const iface = new Utils.Interface(abi);
 // Encoding the data -> Call transfer function and pass the amount to send and the
//address to send the tokens 

const data = iface.encodeFunctionData("transfer", [
    toAddress,
    Utils.parseUnits(amountToSendInDecimals.toString(), "wei"),
    ]);
    // Make the transaction object to send the transaction
    const transaction = {
    to: usdcContractAddress, // The transaction will be sent to the USDC contract
   //address
    nonce: await alchemy.core.getTransactionCount(wallet.getAddress()), // Get the
  // nonce of the wallet
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas, // This is the fee that the
 //  miner will get
    maxFeePerGas: feeData.maxFeePerGas, // This is the maximum fee that you are willing
  // to pay
    type: 2, // EIP-1559 transaction type
    chainId: 11155111, // Corresponds to ETH_SEPOLIA
    data: data, // encoded data for the transaction
    gasLimit: Utils.parseUnits("250000", "wei"), // gas limit for the transaction
  // (250000 gas) -> For sending ERC20 tokens, the gas limit is usually around 200,000-
   //250,000 gas
    };
    // Send the transaction and log it.
    const sentTx = await wallet.sendTransaction(transaction);
    console.log(sentTx);
   }

   main();
//    {
//     type: 2,
//     chainId: 11155111,
//     nonce: 4,
//     maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
//     maxFeePerGas: BigNumber { _hex: '0x27a4167c90', _isBigNumber: true },
//     gasPrice: null,
//     gasLimit: BigNumber { _hex: '0x03d090', _isBigNumber: true },
//     to: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
//     value: BigNumber { _hex: '0x00', _isBigNumber: true },
//     data: '0xa9059cbb000000000000000000000000afaf84b9938b31b357dadde97e38772b63fcae9200000000000000000000000000000000000000000000000000000000001e8480',
//     accessList: [],
//     hash: '0x8c5888916f3442be1793a4530452e1a4f0172107b15fc3b3a4174199ffc4b5b9',
//     v: 0,
//     r: '0xf6ce0e22dc957a09dc013cabfc942574dfd50225f5a6ccbcbfc213d9d3afd102',
//     s: '0x42e9e07819c821f44f1b42f53d2fcab0cdea5c2721b6fdf43e83fc4520a056b7',
//     from: '0x3551b363817E563e871Ea2Ec55847ca9cA84Bf88',
//     confirmations: 0,
//     wait: [Function (anonymous)]
//   }