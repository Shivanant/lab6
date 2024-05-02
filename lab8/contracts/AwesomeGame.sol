
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract AwesomeGame is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant SWORD = 2;
    uint256 public constant SHIELD = 3;
    uint256 public constant CROWN = 4;
    uint256 public constant PRIZE = 5; // New constant for the prize

    constructor() ERC1155("https://awesomegame.com/assets/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**18, "");
        _mint(msg.sender, SWORD, 1000, "");
        _mint(msg.sender, SHIELD, 1000, "");
        _mint(msg.sender, CROWN, 1, "");
        _mint(msg.sender, PRIZE, 1, ""); // Mint the unique prize
    }

    // You might want to add a function to transfer the prize to the winner.
    // Ensure only the owner or a designated party can call this to prevent unauthorized use.
    function awardPrize(address winner) public {
        // Add your access control mechanism here (e.g., onlyOwner)
        require(balanceOf(msg.sender, PRIZE) > 0, "Prize has already been awarded.");
        safeTransferFrom(msg.sender, winner, PRIZE, 1, "");
    }
}
