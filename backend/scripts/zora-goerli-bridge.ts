import { Transaction, ethers } from "ethers";
import dotenv from 'dotenv';

dotenv.config();

const bridge = '0xDb9F51790365e7dc196e7D072728df39Be958ACe';
// const network = 'goerli';
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ALCHEMY_GOERLI_API_KEY;
const recipient = '0x969c093EBb527F2E2153E88A397315273dEef764';
const value = ethers.parseEther("0.02");

const main = async() => {
 if(!PRIVATE_KEY || ! API_KEY) throw new Error('missing env');
 
 const provider = new ethers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`);
 const signer = new ethers.Wallet(PRIVATE_KEY, provider);

 const abi = [
    "function depositTransaction(address _to, uint256 _value, uint64 _gasLimit, bool _isCreation, bytes __data)"
 ]
 
 const iface = new ethers.Interface(abi);
 
 const calldata = iface.encodeFunctionData('depositTransaction', [
    recipient,
    value,
    60000,
    false,
    "0x00"
 ]);
 
 const tx = await signer.sendTransaction({to: bridge, value: value, data: calldata});
 console.log(await tx.wait());

 await balanceCheck();
 
}

const balanceCheck = async() => {
    if(!API_KEY) throw new Error('missing env');
    console.log('\nchecking balance...')
    const provider = new ethers.JsonRpcProvider('https://testnet.rpc.zora.energy/');
    const bal = await provider.getBalance(recipient);
    console.log('\nbalance', ethers.formatEther(bal));
}
balanceCheck();

// main().catch((error) => {
//     console.log(error);
//     process.exitCode = 1;
// });