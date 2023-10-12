// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import './Logger.sol';

contract Greeter {

    string private _greet;

    constructor(string memory initialGreet) {
        // logger = logger_;
        // Logger _logger = Logger(logger_);
        // _logger.emitDeploy(msg.sender, address(this));
        _greet = initialGreet;
    }

    function setGreet(string memory greet) external {
        _greet = greet;
    }

    function getGreet() external view returns(string memory) {
        return _greet;
    }

}