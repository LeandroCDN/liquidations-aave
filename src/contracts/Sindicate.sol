// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IPool.sol";

contract Sindicate is Ownable {
    IPOOL pool;
    constructor(address initialOwner, address pool) Ownable(initialOwner){
        pool = IPOOL(pool);
    }

    
}