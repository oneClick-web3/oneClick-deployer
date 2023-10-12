import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useSigner } from 'wagmi';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import DeployButton from '@/components/DeployButton';
import UnlockButton from '@/components/UnlockButton';
import Greeter from '@/components/Greeter';
import NetworkSelector from '@/components/NetworkSelector';
import Connect from '@/components/Connect';

const inter = Inter({ subsets: ['latin'] })

const sepolia = 11155111;
const hardhat = 31337;
const linea = 59144;
const zora = 7777777;
const base = 8453;
const polygonzk = 1101;
const zksyncEra = 324;

export default function Home() {
  const { data: signer } = useSigner();
  const [locked, setLocked] = useState<boolean>(true);
  const [deployed, setDeployed] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string>();
  const [network, setNetwork] = useState<boolean>(false);

  // const { chain } = useNetwork();

  // useEffect(() => {
  //   if(
  //     chain?.id != hardhat
  //   ) setNetwork(false);
  // }, [chain])

  // console.log('chain', chain);

  return (
    <>
    <main className="h-screen flex items-center justify-center bg-black">
      <div className="border-4 border-green-400 max-w-2xl w-full p-4 rounded-lg bg-black">
        <h1 className="mb-6 text-center text-3xl font-mono font-bold tracking-tight text-white">
          One Click Contract Deployer
        </h1>
        {signer ? (
          network ? (
            <>
              <p className="mb-6 text-center text-white font-mono">
                <b>Welcome Airdrop Hunter!</b><br />
                Here you can deploy your own greeter contracts with a few clicks<br /> and increase your chance to earn airdrops. <br />
                Follow these easy steps:<br />
                <b>1 - </b>hit 'unlock', pay the unlock fee (0.0002 ETH);<br />
                <b>2 - </b>hit 'deploy' and confirm the tx;<br />
                <b>3 - </b>interact with your contract setting new greeter messages.<br />
                Well Done. You increased your chances to earn some free doe!!<br/>
                DON'T REFRESH UNTIL YOU ARE DONE!
              </p>
              <div className="flex justify-center items-center">
                {locked ? (
                  <UnlockButton setLocked={setLocked} />
                ) : deployed ? (
                  <Greeter address={contractAddress} />
                ) : (
                  <DeployButton setDeployed={setDeployed} setContractAddress={setContractAddress} />
                )}
              </div>
            </>
          ) : (
            <NetworkSelector setNetwork={setNetwork} />
          )
        ) : (
          <Connect />
        )}
      </div>
    </main>
    <div className="fixed bottom-0 left-0 w-full bg-black p-4">
      <div className="text-center">
          <Link href="https://github.com/YourUsername/YourRepoName" className="text-white hover:underline cursor-pointer font-mono">
              View on GitHub
          </Link>
      </div>
    </div>
    </>
  );
}
