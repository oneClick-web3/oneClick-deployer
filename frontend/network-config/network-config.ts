
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
    blockExplorers: {
      default: {
        name: 'Base Explorer',
        url: 'https://basescan.org/'
      }
    },
    testnet: false,
};


export const baseGoerli = {
  id: 84531,
  name: 'Base Goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  network: 'baseGoerli',
  rpcUrls: {
    default: 'https://goerli.base.org/',
  },
  blockExplorers: {
    default: {
      name: 'Base Goerli Explorer',
      url: 'https://goerli.basescan.org/'
    }
  },
  testnet: true,
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
    blockExplorers: {
      default: {
        name: 'Zora Explorer',
        url: 'https://explorer.zora.energy/'
      }
    },
    testnet: false,
}

export const zoraGoerli = {
  id: 999,
  name: 'Zora Goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  network: 'zoraGoerli',
  rpcUrls: {
    default: 'https://testnet.rpc.zora.energy/',
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: 'Zora Testnet Explorer',
      url: 'https://testnet.explorer.zora.energy'
    }
  }
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
    blockExplorers: {
      default: {
        name: 'Polygon zkEVM Explorer',
        url: 'https://zkevm.polygonscan.com/'
      }
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
  blockExplorers: {
    default: {
      name: 'Polygon zkEVM Testnet Explorer',
      url: 'https://testnet-zkevm.polygonscan.com/'
    }
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
    blockExplorers: {
      default: {
        name: 'ZkSync Era Explorer',
        url: 'https://explorer.zksync.io/'
      }
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
  blockExplorers: {
    default: {
      name: 'Goerli zkSync Era Explorer',
      url:'https://goerli.explorer.zksync.io/'
    }
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
    blockExplorers: {
      default: {
        name: 'Linea Scan',
        url: 'https://lineascan.build/'
      }
    },
    testnet: false,   
}


export const lineaGoerli = {
  id: 59140,
  name: 'Linea Goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  network: 'lineaGoerli',
  rpcUrls: {
    default: 'https://rpc.goerli.linea.build ',
  },
  blockExplorers: {
    default: {
      name: 'Goerli Linea Scan',
      url: 'https://goerli.lineascan.build/'}
  },
  testnet: false,   
}
