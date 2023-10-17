import React from "react";
import { useSwitchNetwork } from "wagmi";
import {
     base, linea, polygonZk, polygonZkTestnet, zkSyncEraTestnet, zkSyncEra, zora, zoraGoerli, lineaGoerli, baseGoerli
} from "@/network-config/network-config";
import { chain } from "wagmi";
import { addChain } from "@/utils/utils";

// const hardhat = chain.hardhat.id;
const testnet = `sepolia\n(testnet)`;


const NetworkSelector = ({setNetwork} : {setNetwork: any}) => {
    const { switchNetworkAsync } = useSwitchNetwork();

    const handler = async(network: number) => {
        if(switchNetworkAsync) {
            try {
                await addChain(network)       
            } catch (error) {
                console.log(error);
                return
            }
            await switchNetworkAsync(network);
            setNetwork(true);
        } else console.log('Error: useSwitchNetwork error')
    }

    return (
        <div className="grid grid-rows-7">
            <div className="pb-2 flex justify-center">
                <h1 className="text-xl font-mono text-white">Select a Network</h1>
            </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(chain.sepolia.id)}
                >
                        {testnet}
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(base.id)}
                 >
                        base
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(linea.id)} 
                >
                        linea
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(polygonZk.id)}
                >
                        polygon zk
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-not-allowed hover:text-black hover:bg-red-400"
                //  onClick={() => handler(zkSyncEraTestnet.id)}
                >
                        zkSync era (soon)
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(zora.id)}
                >
                        zora
                </div>
        </div>
    )
}

export default NetworkSelector;