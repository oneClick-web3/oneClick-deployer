import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import NextHead from 'next/head';
import { chain, createClient, WagmiConfig, configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const hardhatChain = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat',
    symbol: 'HARD',
  },
  network: 'hardhat',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [chain.hardhat],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'GreeterDeployer',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider theme={darkTheme({
      accentColor: '#4A4747',
      accentColorForeground: 'white',
      borderRadius: 'small',
    })} chains={chains} coolMode>
      <NextHead>
        <title>GreeterDeployer </title>
      </NextHead>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}
