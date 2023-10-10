import greeter from './Greeter.json'
import deployments from './deployments.json';

export const greeterCode = greeter;
const networkId = 31337;
export const logger = deployments[networkId][0].contracts.Logger;