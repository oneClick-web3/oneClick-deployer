import { Inter } from 'next/font/google';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSigner } from 'wagmi';
import { useState } from 'react';
import { ethers } from 'ethers';
import DeployButton from '@/components/DeployButton';
import UnlockButton from '@/components/UnlockButton';
import Greeter from '@/components/Greeter';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const {data: signer} = useSigner();
  const [locked, setLocked] = useState<boolean>(true);
  const [deployed, setDeployed] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string>();

  return (
    <main className='h-screen flex flex-col items-center justify-center bg-white dark:bg-black'>
      <div className='border-4 border-green-400 '>
      <div className='flex grid grid-rows-4 justify-center border-4 border-black rounded block p-6 bg-white dark:bg-black dark:border-white'>
        <div className='row-span-1 border-black dark:border-white border-b-4 border-dashed'>
          <h1 className='flex justify-center text-3xl font-mono font-bold tracking-tight text-gray-900 dark:text-white'>
            One Click Contract Deployer
          </h1>
        </div>
        <div className='flex items-center row-span-2'>
          <p className='flex justify-center text-black dark:text-white font-mono'> Wellcome Airdrop Hunter!<br></br>
          Here you can deploy your own greeter contracts to increase your chance to earn airdrops.<br></br>
          Follow these easy steps: <br></br>
          1-Connect a wallet;<br></br>
          2-hit 'unlock', pay the unlock fee (0.0002 ETH);<br></br>
          3-hit 'deploy' and confirm the tx;<br></br>
          4-interact with your contract setting a new greeter msg (don't refresh until you are done).<br></br>
          Well Done. You increased your chances to earn some free doe!! 
          </p>
        </div>
        <div className='p-4 flex justify-center row-span-1'>
        {signer
        ? locked
          ? <UnlockButton setLocked={setLocked} />
          : deployed
          ? <Greeter address={contractAddress} />
          : <DeployButton setDeployed={setDeployed} setContractAddress={setContractAddress} />
        : <ConnectButton/>}
        </div>
        

      </div>
      </div>
    </main>
  )
}
