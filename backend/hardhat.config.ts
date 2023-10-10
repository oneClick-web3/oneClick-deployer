import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy'

const defaultNetwork = 'localhost';

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  
  defaultNetwork,

  networks: {
    localhost: {
      chainId: 31337
    }
  },

  namedAccounts: {
    deployer: {
      default: 0,
    }
  }

};

export default config;
