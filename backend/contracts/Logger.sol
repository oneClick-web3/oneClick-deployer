// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logger {

    event Deployment(address indexed deployer, address greeter);

    constructor() {}

    function emitDeploy(address deployer, address greeter) external {
        emit Deployment(deployer, greeter);
    }
    
}