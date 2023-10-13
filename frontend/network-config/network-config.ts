
export const base = {
    id: 8453,
    name: 'Base Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'ether',
      symbol: 'ETH',
    },
    network: 'base',
    rpcUrls: {
      default: 'https://mainnet.base.org/',
    },
    testnet: false,
};

export const zora = {
    id: 7777777,
    name: 'Zora',
    nativeCurrency: {
      decimals: 18,
      name: 'ether',
      symbol: 'ETH',
    },
    network: 'zora',
    rpcUrls: {
      default: 'https://rpc.zora.energy/',
    },
    testnet: false,
}

export const polygonZk = {
    id: 1101,
    name: 'Polygon zkEVM',
    nativeCurrency: {
      decimals: 18,
      name: 'ether',
      symbol: 'ETH',
    },
    network: 'polygonZk',
    rpcUrls: {
      default: 'https://zkevm-rpc.com',
    },
    testnet: false,   
}

export const polygonZkTestnet = {
  id: 1442,
  name: 'Polygon zkEVM Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  network: 'polygonZkTestnet',
  rpcUrls: {
    default: 'https://rpc.public.zkevm-test.net	',
  },
  testnet: true,
}

export const zkSyncEra = {
    id: 324,
    name: 'zkSync Era Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'ether',
      symbol: 'ETH',
    },
    network: 'zkSyncEra',
    rpcUrls: {
      default: 'https://mainnet.era.zksync.io',
    },
    testnet: false,   
}

export const zkSyncEraTestnet = {
  id: 280,
  name: 'zkSync Era Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  network: 'zkSyncEraTestnet',
  rpcUrls: {
    default: 'https://testnet.era.zksync.dev',
  },
  testnet: true,
}

export const linea = {
    id: 59144,
    name: 'Linea',
    nativeCurrency: {
      decimals: 18,
      name: 'ether',
      symbol: 'ETH',
    },
    network: 'linea',
    rpcUrls: {
      default: 'https://rpc.linea.build',
    },
    testnet: false,   
}