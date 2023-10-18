
export interface LogoUrl {
  [id: number]: string[];
}

export const logo: LogoUrl = {
  8453: [
    "https://go.wallet.coinbase.com/static/base-logo.png"
  ],
  7777777: [
    "https://downloads.intercomcdn.com/i/o/423685/3ee9b2db9b1056f1b326c2fb/77e889c8af55be5cf4b25a1e1061689d.png"
  ],
  1101: [
    "https://polygonscan.com/images/svg/brands/matic.svg",
    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/matic.svg"    
  ],
  324: [
    "https://uptime.com/media/statuspages/arrows_black.png"
  ], 
  59144: [
    "https://images.ctfassets.net/64upluvbiuck/3jYGu3XwBgiRxNPRbzEoyh/53cbb5c2fb09ac12bc073cd15385f625/logo-icon.svg"
  ]
}


export const base = {
    id: 8453,
    name: 'Base Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    network: 'base',
    rpcUrls: {
      default: {
        http: ['https://mainnet.base.org/']
      },
      public: {
        http: ['https://mainnet.base.org/']
      }
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
    name: 'Ether',
    symbol: 'ETH',
  },
  network: 'base-goerli',
  rpcUrls: {
    default: {
      http:['https://goerli.base.org/'],
    }
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
      name: 'Ether',
      symbol: 'ETH',
    },
    network: 'zora',
    rpcUrls: {
      default: {
        http: ['https://rpc.zora.energy/']
      },
      public: {
        http: ['https://rpc.zora.energy/']
      }
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
    name: 'Ether',
    symbol: 'ETH',
  },
  network: 'zoraGoerli',
  rpcUrls: {
    default: {
      http: ['https://testnet.rpc.zora.energy/']
    },
    public: {
      http: ['https://testnet.rpc.zora.energy/']
    }
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
      name: 'Ether',
      symbol: 'ETH',
    },
    network: 'zkSyncEra',
    rpcUrls: {
      default: {
        http: ['https://mainnet.era.zksync.io']
      },
      public: {
        http: ['https://mainnet.era.zksync.io']
      }
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
    name: 'Ether',
    symbol: 'ETH',
  },
  network: 'zkSyncEra-testnet',
  rpcUrls: {
    default: {
      http: ['https://testnet.era.zksync.dev']
    },
    public: {
      http: ['https://testnet.era.zksync.dev']
    }
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
    name: 'Linea Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    network: 'linea',
    rpcUrls: {
      default: {
        http:['https://rpc.linea.build']
      },
      public: {
        http:['https://rpc.linea.build']
      }
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
    name: 'Ether',
    symbol: 'ETH',
  },
  network: 'linea-goerli',
  rpcUrls: {
    default: {
      http: ['https://rpc.goerli.linea.build ']
    },
    public: {
      http: ['https://rpc.goerli.linea.build ']
    }
  },
  blockExplorers: {
    default: {
      name: 'Goerli Linea Scan',
      url: 'https://goerli.lineascan.build/'}
  },
  testnet: true,   
}
