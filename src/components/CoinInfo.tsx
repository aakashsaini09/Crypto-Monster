
interface CoinInfoProps {
  coin: any;
}
// https://api.coingecko.com/api/v3/coins/${currentId}/market_chart?vs_currency=${currentCurrency}&days=${days}
const CoinInfo = ({coin}: CoinInfoProps) => {
  return (
    <div>
      coinInfo
    </div>
  )
}

export default CoinInfo
