// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Greeter.sol";

contract Factory {

    address public immutable logger;

    address public owner;

    uint256 public deployFee;

    // uint256 public treasury;

    string private _initialGreet;

    mapping(address => address[]) private _contracts;

    event NewGreeter(address deployer, address newContract);

    modifier onlyOwner {
        require(msg.sender == owner, "only owner");
        _;
    }

    constructor(address _logger, uint256 deployFee_) { 
        logger = _logger;
        owner = msg.sender;
        deployFee = deployFee_;
    }

    function deployGreeter() external payable {
        require(msg.value >= deployFee, "must pay deploy fee");
        Greeter newGreeter = new Greeter(logger, _initialGreet);
        _contracts[msg.sender].push(address(newGreeter));
        emit NewGreeter(msg.sender, address(newGreeter));
    }

    function getGreeters(address deployer) external view returns(address[] memory ) {
        return _contracts[deployer];
    }

    function setInitialGreet(string memory greet) external onlyOwner {
        _initialGreet = greet;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(success, "withdrawal failed");
    }
}