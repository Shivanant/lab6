// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract GoETH is ERC721{
    address public owner;
    constructor() ERC721("GoETH","GETH"){
        owner= msg.sender;
    }
    

}