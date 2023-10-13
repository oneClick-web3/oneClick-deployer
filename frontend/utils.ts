import { base, linea, polygonZk, polygonZkTestnet, zkSyncEraTestnet, zkSyncEra, zora } from '@/network-config/network-config';
import { chain } from 'wagmi';


const resolveTxLink = (
    network: number,
    txHash: string
) => {
    if(network === chain.mainnet.id) return `https://etherscan.io/tx/${txHash}`;
    if(network === chain.sepolia.id) return `https://sepolia.etherscan.io/tx/${txHash}`;
    if(network === chain.arbitrum.id) return `https://arbiscan.io/tx/${txHash}`;
    if(network === chain.optimism.id) return `https://optimistic.etherscan.io/tx/${txHash}`;
    if(network === base.id ) return `https://basescan.org/tx/${txHash}`;
    if(network === linea.id) return `https://lineascan.build/tx/${txHash}`;
    if(network === polygonZk.id) return `https://zkevm.polygonscan.com/tx/${txHash}`;
    if(network === zkSyncEra.id) return `https://explorer.zksync.io/tx/${txHash}`;
    if(network === zora.id) return `https://explorer.zora.energy/tx/${txHash}`;
    if(network === polygonZkTestnet.id) return `https://testnet-zkevm.polygonscan.com/tx/${txHash}`;
    if(network === zkSyncEraTestnet.id) return `https://goerli.explorer.zksync.io/tx/${txHash}`;
}

const resolveContractLink = (
    network: number, 
    contractAddress: string
) : string | undefined=> {

    if(network === chain.mainnet.id) return `https://etherscan.io/address/${contractAddress}`;
    if(network === chain.sepolia.id) return `https://sepolia.etherscan.io/address/${contractAddress}`;
    if(network === chain.arbitrum.id) return `https://arbiscan.io/address/${contractAddress}`;
    if(network === chain.optimism.id) return `https://optimistic.etherscan.io/address/${contractAddress}`;
    if(network === base.id ) return `https://basescan.org/address/${contractAddress}`;
    if(network === linea.id) return `https://lineascan.build/address/${contractAddress}`;
    if(network === polygonZk.id) return `https://zkevm.polygonscan.com/address/${contractAddress}`;
    if(network === zkSyncEra.id) return `https://explorer.zksync.io/address/${contractAddress}`;
    if(network === zora.id) return `https://explorer.zora.energy/address/${contractAddress}`;
    if(network === polygonZkTestnet.id) return `https://testnet-zkevm.polygonscan.com/address/${contractAddress}`;
    if(network === zkSyncEraTestnet.id) return `https://goerli.explorer.zksync.io/address/${contractAddress}`;
}

export const resolveLink = (
    network?: number, 
    type?:'deploy' | 'unlock', 
    contractAddress?: string, 
    txHash?: string
) => {
    if(!network) {
        console.log('error: resolve link: no network provided');
        return
    }
    if(type === 'deploy' && contractAddress)
     return resolveContractLink(network, contractAddress);
    if(type === 'unlock' && txHash)
     return resolveTxLink(network, txHash);
    else console.log('no link');
}