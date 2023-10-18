import React from "react";
import { useSwitchNetwork } from "wagmi";
import {
     base, linea, zkSyncEraTestnet, zkSyncEra, zora, zoraGoerli, lineaGoerli
} from "@/network-config/network-config";
import { sepolia, hardhat, polygonZkEvm, polygonZkEvmTestnet, baseGoerli } from "wagmi/chains";
import { addChain } from "@/utils/utils";

// const hardhat = chain.hardhat.id;
const testnet = `sepolia\n(testnet)`;


const NetworkSelector = ({ setNetwork, setNewChain } : { setNetwork: any, setNewChain: any }) => {
    const { switchNetwork, error } = useSwitchNetwork();

    const handler = async(network: number) => {
        if(switchNetwork) {
            try {
                await addChain(network);
            } catch (error) {
                console.log(error);
            }
            switchNetwork(network);
            console.log('switchError', error);
            // setNetwork(true);
        } else console.log('Error: useSwitchNetwork error')
        setNewChain(network);
    }

    return (
        <div className="grid grid-rows-7">
            <div className="pb-2 flex justify-center">
                <h1 className="text-xl font-mono text-white">Select a Network</h1>
            </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(sepolia.id)}
                >
                        {testnet}
                </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(base.id)}
                 >
                        base
                </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(linea.id)} 
                >
                        linea
                </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(polygonZkEvm.id)}
                >
                        polygon zk
                </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-not-allowed hover:text-black hover:bg-red-400"
                //  onClick={() => handler(zkSyncEraTestnet.id)}
                >
                        zkSync era (soon)
                </div>
                <div 
                 className="p-4 m-2 md:p-2 md:m-1 sm:p-1 sm:m-0.5 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black cursor-pointer hover:text-black hover:bg-green-400"
                 onClick={() => handler(zora.id)}
                >
                        zora
                </div>
        </div>
    )
}

export default NetworkSelector;