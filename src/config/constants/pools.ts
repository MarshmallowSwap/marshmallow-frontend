import { PoolConfig, QuoteToken, PoolCategory } from './types'

const MASH = 'MASH';

const pools: PoolConfig[] = [
  {
    sousId: 8,
    tokenName: 'Mash-SlimeV2 LP',
    stakingTokenName: QuoteToken[MASH],
    stakingTokenAddress: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    contractAddress: {
      97: '0xab76B5DA1af1C8091B8B8C87533627BB94D2FE36',
      56: '0xab76B5DA1af1C8091B8B8C87533627BB94D2FE36',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://app.slime.finance/',
    harvest: true,
    isFinished: false,
    tokenPerBlock: '0.000856329483621793',
    sortOrder: 1,
    tokenDecimals: 18,
    startBlock: 7323438,
    endBlock: 7525038,
    withwithdrawFee:true,
    isLPStake:false,
    isLPReward:true,
    withdrawFee:0,
    slimeRounding:5,
    image: 'mash-slime'
  },
  {
    sousId: 2,
    tokenName: 'MASH-BUSD LP',
    stakingTokenName: QuoteToken[MASH],
    stakingTokenAddress: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    contractAddress: {
      97: '0x00ea75D83B3Cb954447BADc9F807631416933C48',
      56: '0x00ea75D83B3Cb954447BADc9F807631416933C48',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://marshmallowdefi.com/',
    harvest: true,
    isFinished: false,
    tokenPerBlock: '0.002777777777777777',
    sortOrder: 1,
    tokenDecimals: 18,
    startBlock: 7386238,
    endBlock: 7587838,
    withwithdrawFee: true,
    isLPStake:false,
    isLPReward:true,
    withdrawFee: 0,
    slimeRounding: 5,
    image: 'mash-busd'
  },
  {
    sousId: 1,
    tokenName: 'MASH-BNB LP',
    stakingTokenName: QuoteToken[MASH],
    stakingTokenAddress: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    contractAddress: {
      97: '0xB949337009c97298c06Acbb585058887d10Ba3f9',
      56: '0xB949337009c97298c06Acbb585058887d10Ba3f9',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://marshmallowdefi.com/',
    harvest: true,
    isFinished: false,
    tokenPerBlock: '0.000124007936507936',
    sortOrder: 1,
    tokenDecimals: 18,
    startBlock: 7386238,
    endBlock: 7587838,
    withwithdrawFee: true,
    isLPStake:false,
    isLPReward:true,
    withdrawFee: 0,
    slimeRounding: 5,
    image: 'mash-bnb'
  }
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
