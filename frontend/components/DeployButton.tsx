import React, { useState } from "react";
import { ethers, Contract } from "ethers";
import { useSigner, useNetwork } from "wagmi";
import { greeterCode, logger } from "@/contract-data";
import { zkSyncEra, zkSyncEraTestnet } from "@/network-config/network-config";

const initialGreet = "Hello, show me some airdrops!";

const DeployButton = ({
    setDeployed, 
    setContractAddress, 
    handleAlert
} : {
    setDeployed: any, 
    setContractAddress: any, 
    handleAlert: any
}) => {
    const {data: signer} = useSigner();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const network = useNetwork();
  
    const deployHandler = async() => {
        if(!signer) {
          alert('connect a wallet to deploy');
          return;
        }
        if(isLoading) return;
        let greeter: Contract;
        
        try {
            setIsLoading(true);
            const factory = new ethers.ContractFactory(greeterCode.abi, greeterCode.bytecode, signer);
            greeter = await factory.deploy(initialGreet);
            await greeter.deployTransaction.wait();
        } catch (error) {
            console.log(error);
            handleAlert(false, 'deploy');
            setIsLoading(false);
            return;
        }
        // usar o react alert com a txHash e contractAddress
        // alert('deployment successful');
        setContractAddress(greeter.address);
        handleAlert(true, 'deploy');
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