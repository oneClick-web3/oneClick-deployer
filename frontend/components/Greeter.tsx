import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
// import { logger } from "@contract-data/";
import { useSigner, useProvider } from "wagmi";
import { greeterCode } from "@/contract-data";

const Greeter = ({address, setTxHash, handleAlert} : {address?: string, setTxHash: any, handleAlert: any}) => {
    const { data: signer } = useSigner();
    const provider = useProvider();
    const [greet, setGreet] = useState<string>();
    const [greetInput, setGreetInput] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<boolean>(false);
    const [renderer, setRenderer] = useState<boolean>(false);

    useEffect(() =>{
        const resolveGreet = async() => {
            try {
                if(!address) return
                const greeter = new ethers.Contract(address, greeterCode.abi, provider);
                setGreet(await greeter.getGreet());
            } catch (error) {
                console.log(error);
            }
        }
        resolveGreet();
        
    }, [renderer])

    const setGreetHandler = async() => {
        if(!signer) return;
        if(isLoading) return;
        if(!address) return;
        let receipt;
        try {
            setIsLoading(true);
            const greeter = new ethers.Contract(address, greeterCode.abi, signer);
            const greet = await greeter.setGreet(greetInput);
            receipt = await greet.wait();
        } catch (error) {
            console.log(error);
            handleAlert(false);
            setIsLoading(false);
            return;
        }
        console.log('greet successful');
        setIsLoading(false);
        setTxHash(receipt.transactionHash);
        handleAlert(true);
        setRenderer(!renderer);
    }

    return (
        <>
        <div className="grid grid-rows-2 items-start">
          <div className="flex justify-center space-x-2 mb-4">
            <input
              className="py-1 px-2 w-48 border-4 border-green-400"
              placeholder="new greet"
              type="text"
              value={greetInput}
              onChange={(e) => setGreetInput(e.target.value)}
            />
            <button 
              className="px-4 py-2 rounded bg-gray-500 border-4 border-black hover:bg-green-400 text-black font-mono dark:border-white"
              onClick={setGreetHandler}
              disabled={isLoading}
            >
              {isLoading ? "loading..." : "set greet"}
            </button>
          </div>
          <div>
            <p className="text-black dark:text-white font-mono text-l">current greet:</p>
            <h1 className="text-black dark:text-white font-mono text-2xl whitespace-normal overflow-auto">{greet}</h1>
          </div>
        </div>
      </>
    )
}

export default Greeter;