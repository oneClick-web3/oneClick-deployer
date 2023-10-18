import { 
    mainnet, sepolia, arbitrum, optimism, hardhat, baseGoerli, polygonZkEvm, polygonZkEvmTestnet
} from 'wagmi/chains';
import { 
    base, linea, zkSyncEraTestnet, zkSyncEra, zora, zoraGoerli, lineaGoerli
} from '@/network-config/network-config';

const baselogo = 'https://go.wallet.coinbase.com/static/base-logo.png'

export async function addChain(network: number) {
    if(network === hardhat.id) return;
    if(network === sepolia.id) return;
    if(network === linea.id) return;
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
            "rpcUrls": 
              chain_.rpcUrls.default.http,
            "nativeCurrency": {
              "name": chain_.nativeCurrency.name,
              "symbol": chain_.nativeCurrency.symbol,
              "decimals": chain_.nativeCurrency.decimals
            },
            "blockExplorerUrls": [
              chain_.blockExplorers.default.url
            ],
            // "iconUrls": [baselogo]
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
    if(network === base.id ) return base;
    if(network === linea.id) return linea;
    if(network === zkSyncEra.id) return zkSyncEra;
    if(network === zora.id) return zora;
    if(network === zkSyncEraTestnet.id) return zkSyncEraTestnet
    if(network === zoraGoerli.id) return zoraGoerli;
    if(network === lineaGoerli.id) return lineaGoerli;
    // if(network === baseGoerli.id) return baseGoerli;
    if(network === polygonZkEvmTestnet.id) return ({
        id: 1442,
        name: "Polygon zkEVM Testnet",
        network: "polygon-zkevm-testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.public.zkevm-test.net"],
            },
            public: {
                http: ["https://rpc.public.zkevm-test.net"],
            },
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://explorer.public.zkevm-test.net",
            },
        },
        testnet: true,
    });
    if(network === polygonZkEvm.id) return (
        {
            id: 1101,
            name: "Polygon zkEVM",
            network: "polygon-zkevm",
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: {
                default: {
                    http: ["https://zkevm-rpc.com"],
                },
                public: {
                    http: ["https://zkevm-rpc.com"],
                },
            },
            blockExplorers: {
                default: {
                    name: "PolygonScan",
                    url: "https://zkevm.polygonscan.com",
                },
            },
        }
    );
}

const resolveTxLink = (
    network: number,
    txHash: string
) => {
    if(network === mainnet.id) 
        return `https://etherscan.io/tx/${txHash}`;
    if(network === sepolia.id) 
        return `https://sepolia.etherscan.io/tx/${txHash}`;
    if(network === arbitrum.id) 
        return `https://arbiscan.io/tx/${txHash}`;
    if(network === optimism.id) 
        return `https://optimistic.etherscan.io/tx/${txHash}`;
    if(network === base.id ) 
        return base.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === linea.id) 
        return linea.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === polygonZkEvm.id) 
        return polygonZkEvm.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zkSyncEra.id)
        return zkSyncEra.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === zora.id)
        return zora.blockExplorers.default.url.concat(`/tx/${txHash}`);
    if(network === polygonZkEvmTestnet.id)
        return `https://testnet-zkevm.polygonscan.com/tx/${txHash}`;
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

    if(network === mainnet.id) 
        return `https://etherscan.io/address/${contractAddress}`;
    if(network === sepolia.id) 
        return `https://sepolia.etherscan.io/address/${contractAddress}`;
    if(network === arbitrum.id) 
        return `https://arbiscan.io/address/${contractAddress}`;
    if(network === optimism.id) 
        return `https://optimistic.etherscan.io/address/${contractAddress}`;
    if(network === base.id ) 
        return base.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === linea.id) 
        return linea.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === polygonZkEvm.id) 
        return polygonZkEvm.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zkSyncEra.id) 
        return zkSyncEra.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zora.id)
        return zora.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === polygonZkEvmTestnet.id)
        return `https://testnet-zkevm.polygonscan.com/address/${contractAddress}`;
    if(network === zkSyncEraTestnet.id)
        return zkSyncEraTestnet.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === zoraGoerli.id) 
        return zoraGoerli.blockExplorers.default.url.concat(`/address/${contractAddress}`);
    if(network === baseGoerli.id)
        return baseGoerli.blockExplorers.default.url.concat(`/address/${contractAddress}`);
}
