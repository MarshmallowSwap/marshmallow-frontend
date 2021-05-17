import { usePriceMashBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalMash = getBalanceNumber(totalRewards)
  const mashPriceBusd = usePriceMashBusd()

  return totalMash * mashPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
