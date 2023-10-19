import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import NextHead from 'next/head';
import { createClient, WagmiConfig, configureChains } from 'wagmi';
import { 
  hardhat, mainnet, sepolia, arbitrum, optimism, polygonZkEvm, polygonZkEvmTestnet, baseGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { 
  base, linea, zkSyncEraTestnet, zkSyncEra, zora, zoraGoerli, lineaGoerli, scrollSepolia, scroll
} from '@/network-config/network-config';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet, coinbaseWallet, walletConnectWallet} from '@rainbow-me/rainbowkit/wallets';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID?? "";

const { chains, provider } = configureChains(
  [
    mainnet, sepolia, hardhat, arbitrum, optimism, base, baseGoerli, scrollSepolia, scroll,
    linea, polygonZkEvm, polygonZkEvmTestnet, zkSyncEra, zkSyncEraTestnet, zora, zoraGoerli, lineaGoerli
  ],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains, projectId }),
      coinbaseWallet({ appName:'oneClick-deployer', chains }),
      walletConnectWallet({ chains, projectId})
    ],
  },
]);

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
        <title>OneClick Deployer </title>
      </NextHead>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}
