import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    
    await deploy('Logger', {
        from: deployer,
        args: [],
        log: true,
        // gasPrice: gasPrice
    });
};
module.exports.default = func;
func.tags = [];