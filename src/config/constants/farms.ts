import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MASH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x87c182edb12f74d561519ab586205fe6cd75363a',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  //   {
  //   pid: 20,
  //   risk: 5,
  //   lpSymbol: 'MASH-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x548997391C670A5179AF731A30e7C3aDA2f483e7',
  //   },
  //   tokenSymbol: 'MASH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  // },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MASH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7621886ac71e985dbea4f3f563bbb5a7865876a8',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'MASH-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x0e70ff44229c6573cc020921345948ba4b5ec7cc',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btcb,
  },
  {
    pid: 14,
    risk: 5,
    lpSymbol: 'MASH-VAULT LP',
    lpAddresses: {
      97: '',
      56: '0x9f8223b4b616aa9becb599c93b0430c6bef0443a',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.VAULT,
    quoteTokenAdresses: contracts.vault,
  },
  {
    pid: 15,
    risk: 5,
    lpSymbol: 'MASH-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x16940bc578c30c7c10a2cf8a150b98a8b1cee152',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.cake,
    image: 'mash-cake',
  },
  {
    pid: 21,
    risk: 5,
    lpSymbol: 'MASH-PLUM LP',
    lpAddresses: {
      97: '',
      56: '0x9EC365D77dCF2b3230399a23D35aEF4318de710D',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.PLUM,
    quoteTokenAdresses: contracts.plum,
    depositUrl: 'https://exchange.pancakeswap.finance/#/add/0x787732f27d18495494cea3792ed7946bbcff8db2/0xdE8eD8c9480EA12D050182AA99630B235dE30f83'
  },
  {
    pid: 22,
    risk: 5,
    lpSymbol: 'MASH-SLIME LP',
    lpAddresses: {
      97: '',
      56: '0xb442780739037577920857DaD91259416b72DE7a',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.cake,
    depositUrl: 'https://dex.slime.finance/#/add/0x23b06097F8FE2DD9D3dF094D3ee8319Daa8756c1/0x787732f27d18495494cea3792ed7946bbcff8db2',
    image: 'mash-slime'
  },
  {
    pid: 23,
    risk: 5,
    lpSymbol: 'MASH-TAKO LP',
    lpAddresses: {
      97: '',
      56: '0xC6D926086b29774b10530ab9e02980e9586a061F',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.cake,
    depositUrl: 'https://dex.apeswap.finance/#/add/0x2F3391AeBE27393aBa0a790aa5E1577fEA0361c2/0x787732f27d18495494cea3792ed7946bbcff8db2',
    image: 'mash-tako'
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MASH',
    lpAddresses: {
      97: '',
      56: '0x87c182edb12f74d561519ab586205fe6cd75363a', // VIKING-BUSD LP
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x87c182edb12f74d561519ab586205fe6cd75363a', // VIKING-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '',
      56: '0xec7a69a3a5ee177c84855c86cc926ca0ba6275cc', // CAKE-BUSD LP
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 10,
    isTokenOnly: true,
    lpSymbol: 'VAULT',
    lpAddresses: {
      97: '',
      56: '0xbeba8abb80bfa3c13ee4073d75a873e8a2b71dc3', // CAKE-BUSD LP
    },
    tokenSymbol: 'VAULT',
    tokenAddresses: {
      97: '',
      56: '0xd456be0ff7007b3d8ad656136487a23e771f5762',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'XVS',
    lpAddresses: {
      97: '',
      56: '0x7d0ad8d3333814cf2ba2fb082dbc52d6b1a57c6e', // CAKE-BUSD LP
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680Dd100E4b394Bda26A59dD5c119A391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'DOGE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1Efcb446bFa553A2EB2fff99c9F76962be6ECAC3',
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
