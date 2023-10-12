import React from "react";
import { useSwitchNetwork } from "wagmi";
import { base, linea, polygonZk, zkSyncEra, zora  } from "@/network-config/network-config";
import { chain } from "wagmi";

const hardhat = chain.hardhat.id;
const testnet = `sepolia\n(testnet)`


const NetworkSelector = ({setNetwork} : {setNetwork: any}) => {
    const { switchNetwork } = useSwitchNetwork();

    const handler = (network: number) => {
        if(switchNetwork) {
            switchNetwork?.(network);
            setNetwork(true);
        }
    }

    return (
        <div className="grid grid-rows-7">
            <div className="pb-2 flex justify-center">
                <h1 className="text-xl font-mono text-white">Select a Network</h1>
            </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(chain.sepolia.id)}
                >
                        {testnet}
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(hardhat)}
                 >
                        base
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(hardhat)} 
                >
                        linea
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(hardhat)}
                >
                        polygon zk
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(hardhat)}
                >
                        zkSync era
                </div>
                <div 
                 className="p-4 m-2 flex justify-center border-4 rounded text-white font-mono font-bold border-white bg-black hover:text-black hover:bg-green-400"
                 onClick={() => handler(hardhat)}
                >
                        zora
                </div>
        </div>
    )
}

export default NetworkSelector;