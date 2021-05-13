import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from '@pancakeswap-libs/uikit'
import { ChainId, Token, Fetcher } from '@pancakeswap-libs/sdk'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { isArray } from 'lodash'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import multicall from 'utils/multicall'
import erc20 from 'config/abi/erc20.json'
import { getDefaultProvider } from '@ethersproject/providers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePriceBnbBusd, usePools, usePriceCakeBusd } from 'state/hooks'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const MASH = new Token(ChainId.MAINNET, '0x787732f27d18495494cea3792ed7946bbcff8db2', 18)
const BNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18)

const Pools: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()
  const cakebusd = usePriceCakeBusd() // slimePriceInBusd
  const block = useBlock()
  let bbprice = new BigNumber(0)

  const priceList = {}

  const TokenPriceBNB = (token: string, tokenDecimals: number, isLpReward: boolean,isSlimeAMM:boolean): BigNumber => {
    const [price, setPrice] = React.useState(new BigNumber(0))

    React.useEffect(() => {
      async function fetchdata(_token, _isLp, _tokenDecimals,_slimeamm) {
        if (_token !== '') {
          const mytoken = `0x${_token.substring(2).toUpperCase()}`

          if (mytoken !== '0xBB4CDB9CBD36B01BD1CBAEBF2DE08D9173BC095C') {
            // console.log('aj ****** isLp', _isLp, mytoken)
            if (_isLp === true) {
              console.log('myLPtokenDATA11')
              const calls = [
                // Balance of quote token on LP contract
                {
                  address: MASH.address,
                  name: 'balanceOf',
                  params: [mytoken],
                },

                // Total supply of LP tokens
                {
                  address: mytoken,
                  name: 'totalSupply',
                },
                // Token decimals
                {
                  address: MASH.address,
                  name: 'decimals',
                },
              ]

              const [quoteTokenBlanceLP, lpTotalSupply, qtokenDecimals] = await multicall(erc20, calls)
              const tokenAmount = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(10).pow(qtokenDecimals))

              const LpAmount = new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(18))

              const LpPrice = tokenAmount.multipliedBy(cakebusd).multipliedBy(new BigNumber(2)).div(LpAmount)

              console.log('LpPrice', token, LpPrice.toNumber(), LpAmount.toNumber())
              setPrice(LpPrice)
            } else {
              const TOKEN = new Token(ChainId.MAINNET, mytoken, _tokenDecimals)
              Fetcher.fetchPairData(
                TOKEN,
                BNB,
                getDefaultProvider('https://patient-long-flower.bsc.quiknode.pro/e8d35735534a1fa9c3680c58e16b3847be567cf4/'),
              ).then((pairData) =>
                setPrice(
                  new BigNumber(
                    parseFloat(pairData.reserve1.toSignificant(4)) / parseFloat(pairData.reserve0.toSignificant(4)),
                  ),
                ),
              )
            }
          } else if (mytoken === '0xBB4CDB9CBD36B01BD1CBAEBF2DE08D9173BC095C') {
            setPrice(new BigNumber(1))
          }
        }
      }

      console.log('fetchdata', token, isLpReward, tokenDecimals)
      fetchdata(token, isLpReward, tokenDecimals,isSlimeAMM)
    }, [token, isLpReward, tokenDecimals,isSlimeAMM])

    priceList[token] = price
    return price
  }

  const StakeTokenPriceBNB = (token: string, tokenDecimals: number, isLpReward: boolean,isSlimeAMM:boolean): BigNumber => {
    const [price, setPrice] = React.useState(new BigNumber(0))

    React.useEffect(() => {
      async function fetchdata(_token, _isLp, _tokenDecimals,_slimeamm) {
        if (_token !== '') {
          console.log('tokeeeeeen STAKEE', _token)
          const mytoken = `0x${_token.substring(2).toUpperCase()}`

          if (mytoken !== '0xBB4CDB9CBD36B01BD1CBAEBF2DE08D9173BC095C') {
            console.log('isLp STAKEE', _isLp)
            if (_isLp === true) {
              console.log('myLPtokenDATA11 STAKEE')
              const calls = [
                // Balance of quote token on LP contract
                {
                  address: MASH.address,
                  name: 'balanceOf',
                  params: [mytoken],
                },

                // Total supply of LP tokens
                {
                  address: mytoken,
                  name: 'totalSupply',
                },
                // Token decimals
                {
                  address: MASH.address,
                  name: 'decimals',
                },
              ]

              const [quoteTokenBlanceLP, lpTotalSupply, qtokenDecimals] = await multicall(erc20, calls)
              const tokenAmount = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(10).pow(qtokenDecimals))

              const LpAmount = new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(18))

              const LpPrice = tokenAmount.multipliedBy(cakebusd).multipliedBy(new BigNumber(2)).div(LpAmount)

              console.log('LpPrice STAKEE', token, LpPrice.toNumber(), LpAmount.toNumber())
              setPrice(LpPrice)
            } else {

              const TOKEN = new Token(ChainId.MAINNET, mytoken, _tokenDecimals)
              Fetcher.fetchPairData(
                TOKEN,
                BNB,
                getDefaultProvider('https://patient-long-flower.bsc.quiknode.pro/e8d35735534a1fa9c3680c58e16b3847be567cf4/'),
              ).then((pairData) =>


                setPrice(
                  new BigNumber(
                    parseFloat(pairData.reserve1.toSignificant(4)) / parseFloat(pairData.reserve0.toSignificant(4)),
                  ),
                ),
              )
            }



          } else if (mytoken === '0xBB4CDB9CBD36B01BD1CBAEBF2DE08D9173BC095C') {
            setPrice(new BigNumber(1))
          }
        }
      }

      console.log('fetchdata STAKEE', token, isLpReward, tokenDecimals)
      fetchdata(token, isLpReward, tokenDecimals,isSlimeAMM)
    }, [token, isLpReward, tokenDecimals,isSlimeAMM])

    priceList[token] = price
    return price
  }

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  let stakepriceBUSD = new BigNumber(1)
  const poolsWithApy = pools.map((pool) => {
    bbprice = new BigNumber(0)
    let stakePrice = new BigNumber(0)
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

    const TokenRewardAddress = pool.userData
    const tkname = pool.tokenName

    let address = ''

    if (TokenRewardAddress) {
      address = TokenRewardAddress.rewardAddress

      if (isArray(address)) {
        address = address[0]
      }
    }

    const price = TokenPriceBNB(address, pool.tokenDecimals, pool.isLPReward, pool.isSlimeAMM)
    if(pool.stakingTokenAddress !== "0x787732f27d18495494cea3792ed7946bbcff8db2"){
      stakePrice = StakeTokenPriceBNB(pool.stakingTokenAddress, 18, pool.isLPStake,pool.isSlimeAMM)
    }

    if (pool.isLPStake) {
      stakepriceBUSD = stakePrice
    }  else if(pool.stakingTokenAddress === "0x787732f27d18495494cea3792ed7946bbcff8db2"){
      stakePrice = cakebusd.div(bnbPriceUSD);
      stakepriceBUSD= cakebusd;
    } else {
      stakepriceBUSD = bnbPriceUSD.multipliedBy(stakePrice)
    }

    console.log('StakepriceBUSD', pool.stakingTokenAddress,bnbPriceUSD.toNumber() ,stakePrice.toNumber(), stakepriceBUSD.toNumber(),cakebusd.toNumber())

    if (pool.userData) {
      if (pool.isLPReward) {
        bbprice = price
      } else {
        bbprice = bnbPriceUSD.multipliedBy(price)
      }

      if (bbprice === new BigNumber(0)) {
        const rewardTokenPriceInBNB = priceToBnb(
          pool.tokenName,
          rewardTokenFarm?.tokenPriceVsQuote,
          rewardTokenFarm?.quoteTokenSymbol,
        )
        bbprice = bnbPriceUSD.multipliedBy(rewardTokenPriceInBNB)
      }
    }
    // console.log('RewardPrice', address, bbprice.toNumber(), price.toNumber())
    // /!\ Assume that the farm quote price is BNB
    const stakingTokenPriceInBNB = isBnbPool ? new BigNumber(1) : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)

    /*

    */
    const tvl = cakebusd.multipliedBy(pool.totalStaked)
    const rperyear = bbprice.multipliedBy(pool.tokenPerBlock).multipliedBy(BLOCKS_PER_YEAR)
    const apy2 = rperyear.div(tvl)

    const totalRewardPricePerYear = bbprice.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = cakebusd.times(getBalanceNumber(pool.totalStaked))
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    console.log(`aj : ***** poolName: ${pool.tokenName} pool.totalStaked: ${pool.totalStaked}`);
    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
      bbprice,
      stakepriceBUSD,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  console.log('aj : ***** openPools => ', openPools);
  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            {TranslateString(282, 'Launch Pool')}
          </Heading>
          <ul>
            <li>{TranslateString(406, 'Be part of our ecosystem.')}</li>
          </ul>
        </div>
        <img src="/images/building_big.png" alt="Launch POOL icon" width={410} height={191} />
      </Hero>
      <PoolTabButtons />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            <Coming />
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Pools
