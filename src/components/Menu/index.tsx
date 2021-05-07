import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'
import Countdown from './Countdown';

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <>
      <UikitMenu
        account={account}
        login={connect}
        logout={reset}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage && selectedLanguage.code}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        cakePriceUsd={cakePriceUsd.toNumber()}
        links={config}
        priceLink="https://bscscan.com/token/0x787732f27d18495494cea3792ed7946bbcff8db2"
        {...props}
      />
      <Countdown />
    </>
  )
}

export default Menu
