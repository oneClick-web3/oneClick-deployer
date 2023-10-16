import { chain } from 'wagmi';
import { 
    base, baseGoerli, linea, polygonZk, polygonZkTestnet, 
    zkSyncEraTestnet, zkSyncEra, zora, zoraGoerli, lineaGoerli
} from '@/network-config/network-config';


export async function addChain(network: number) {
    if(network === chain.hardhat.id) return;
    if(network === chain.sepolia.id) return;
    const chain_ = resolveChain(network);
    if(!chain_)
     throw new Error('wrong network arg')
    if(!window.ethereum)
     throw new Error('no wallet object')
    
    const chainId = chain_.id.toString(16);
    const res = await window.ethereum.request({
        "method": "wallet_addEthereumChain",
        "params": [
          {
            "chainId": `0x${chainId}`,
            "chainName": chain_.name,
            "rpcUrls": [
              chain_.rpcUrls.default
            ],
            "nativeCurrency": {
              "name": chain_.nativeCurrency.name,
              "symbol": chain_.nativeCurrency.symbol,
              "decimals": chain_.nativeCurrency.decimals
            },
            "blockExplorerUrls": [
              chain_.blockExplorers.default.url
            ]
          }
        ]
      });
    return res
}

export function resolveLink(
    network?: number, 
    type?:'deploy' | 'unlock', 
    contractAddress?: string, 
    txHash?: string
) {
    if(!network) {
        console.log('error: resolveLink: no network provided');
        return
    }
    if(type === 'deploy' && contractAddress)
     return resolveContractLink(network, contractAddress);
    else if(txHash)
     return resolveTxLink(network, txHash);
    else console.log('no link');
}

const resolveChain = (network: number) => {
    // if(network === chain.hardhat.id) return chain.hardhat
    // if(network === chain.sepolia.id) return chain.sepolia;
    if(network === base.id ) return base;
    if(network === linea.id) return linea;
    if(network === polygonZk.id) return polygonZk;
    if(network === zkSyncEra.id) return zkSyncEra;
    if(network === zora.id) return zora;
    if(network === polygonZkTestnet.id) return polygonZkTestnet;
    if(network === zkSyncEraTestnet.id) return zkSyncEraTestnet
    if(network === zoraGoerli.id) return zoraGoerli;
    if(network === lineaGoerli.id) return lineaGoerli;
    if(network === baseGoerli.id) return baseGoerli;
}

const resolveTxLink = (
    network: number,
    txHash: string
) => {
    if(network === chain.mainnet.id) 
        return `https://etherscan.io/tx/${txHash}`;
    if(network === chain.sepolia.id) 
        return `https://sepolia.etherscan.io/tx/${txHash}`;
    if(network === chain.arbitrum.id) 
        return `https://arbiscan.io/tx/${txHash}`;
    if(network === chain.optimism.id) 
        return `https://optimistic.etherscan.io/tx/${txHash}`;
    if(network === base.id ) 
        return base.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === linea.id) 
        return linea.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === polygonZk.id) 
        return polygonZk.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zkSyncEra.id)
        return zkSyncEra.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zora.id)
        return zora.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === polygonZkTestnet.id)
        return polygonZkTestnet.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zkSyncEraTestnet.id) 
        return zkSyncEraTestnet.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zoraGoerli.id) 
        return zoraGoerli.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === baseGoerli.id)
        return baseGoerli.blockExplorers.default.url.concat(`/tx/${txHash}`);
}

const resolveContractLink = (
    network: number, 
    contractAddress: string
) : string | undefined=> {

    if(network === chain.mainnet.id) 
        return `https://etherscan.io/address/${contractAddress}`;
    if(network === chain.sepolia.id) 
        return `https://sepolia.etherscan.io/address/${contractAddress}`;
    if(network === chain.arbitrum.id) 
        return `https://arbiscan.io/address/${contractAddress}`;
    if(network === chain.optimism.id) 
        return `https://optimistic.etherscan.io/address/${contractAddress}`;
    if(network === base.id ) 
        return base.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === linea.id) 
        return linea.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === polygonZk.id) 
        return polygonZk.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zkSyncEra.id) 
        return zkSyncEra.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zora.id)
        return zora.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === polygonZkTestnet.id)
        return polygonZkTestnet.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zkSyncEraTestnet.id)
        return zkSyncEraTestnet.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zoraGoerli.id) 
        return zoraGoerli.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === baseGoerli.id)
        return baseGoerli.blockExplorers.default.url.concat(`/address/${contractAddress}`);
}
