# Greeter.sol

```solidity
contract Greeter {

    string private _greet;

    constructor(string memory initialGreet) {
        _greet = initialGreet;
    }

    function setGreet(string memory greet) external {
        _greet = greet;
    }

    function getGreet() external view returns(string memory) {
        return _greet;
    }

}

```