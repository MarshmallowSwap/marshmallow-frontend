import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useFarmsValue, useLaunchPoolValue, useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()
  const farmsValue = useFarmsValue()
  const launchPoolsValue = useLaunchPoolValue()

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="12px">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
        <>
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
          <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
        <Heading size="md" mb="12px" mt="20px">
          {TranslateString(999, 'Value Locked for Farms and Pools')}
        </Heading>
        <>
          <CardValue value={farmsValue.toNumber()} prefix="$" decimals={2} fontSize="30px" />
        </>
        <Heading size="md" mb="12px" mt="20px">
          {TranslateString(999, 'Value Locked for Launch Pools')}
        </Heading>
        <>
          <CardValue value={launchPoolsValue.toNumber()} prefix="$" decimals={2} fontSize="30px" />
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
