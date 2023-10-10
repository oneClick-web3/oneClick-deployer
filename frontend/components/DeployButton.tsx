import React, { useState } from "react";
import { ethers, Contract } from "ethers";
import { useSigner } from "wagmi";
import { greeterCode, logger } from "@/contract-data";


const initialGreet = "Hello, show me some airdrops!";

const DeployButton = ({setDeployed, setContractAddress} : {setDeployed: any, setContractAddress: any}) => {
    const {data: signer} = useSigner();
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const deployHandler = async() => {
        if(!signer) {
          alert('connect a wallet to deploy');
          return;
        }
        if(isLoading) return;
        let greeter: Contract;
        try {
            const factory = new ethers.ContractFactory(greeterCode.abi, greeterCode.bytecode, signer);
            greeter = await factory.deploy(logger.address, initialGreet);
            await greeter.deployTransaction.wait();
        } catch (error) {
            console.log(error);
            alert('deployment failed');
            return;
        }
        // usar o react alert com a txHash e contractAddress
        alert('deployment successful');
        setContractAddress(greeter.address)
        setDeployed(true);
    }

    return (
        <>
        <div className="p-4">
            <button 
            className="px-4 py-2 rounded bg-gray-500 border-4 border-white hover:bg-green-400 text-black font-mono"
            onClick={deployHandler}
            >
                {isLoading? "deploying..." : "Deploy!"}
            </button>
        </div>
        </>

    )
}

export default DeployButton;