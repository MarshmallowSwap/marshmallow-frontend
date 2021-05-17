import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  // align-items: center;
  // background-image: url('/images/egg/3.png');
  // background-repeat: no-repeat;
  // background-position: top center;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // margin: auto;
  // margin-bottom: 32px;
  // padding-top: 116px;
  // text-align: center;

  // background-image: url('/images/egg/alert_4.jpg');
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 116px;
  text-align: center;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');
    // background-position: left center, right center;
    // height: 165px;
    // padding-top: 0;

    height: 170px;
    background-position: center;
    height: 165px;
    padding-top: 0;
    margin-bottom: 25px
    
  }
`

const BannerImg = styled.img`
  height: 30vh;
  width: 50vw;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: calc(50% - 25vw);
`;

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {/* {TranslateString(576, 'MarshamallowDeFi')} */}
          <BannerImg src='images/banner.png' alt='banner' />
        </Heading>
        {/* <Text>The sweetest and softest yield farm on the Binance Smart Chain!</Text> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
