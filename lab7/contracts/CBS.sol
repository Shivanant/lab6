// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract ChainBase is ERC721{

    uint public tokenCount;
    constructor()ERC721("ChainBase", "CBS"){}

    function mint(address to ) public returns(uint){
        tokenCount++;
        _safeMint(to, tokenCount);
        return (tokenCount);
    }

}
