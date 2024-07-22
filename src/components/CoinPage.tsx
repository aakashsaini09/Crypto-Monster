import axios from "axios"
import { useState, useEffect } from "react"
import CoinInfo from "./CoinInfo"
import { useParams } from "react-router-dom"
import LoadingComp from "./LoadingComp"
import { numberWithCommas } from "./Carousel"
const CoinPage = () => {

  const [loading, setloading] = useState(false)
  const {id} = useParams<{id: string}>()
  const [coin, setCoin] = useState<CoinInfoProps>({
    image: {large: ""},
    name: "",
    symbol: "",
    market_cap_rank: 0,
    market_data: {current_price: {usd: 0}, market_cap: {usd: 0}},
    description:{
      en: ""
    }
  })
  interface CoinInfoProps {
    image: {large: string}
    name: string,
    market_cap_rank: number,
    market_data: { current_price: {usd: number}, market_cap: {usd: number}},
    symbol: string,
    description: {
      en: string
    }
  }
  const getCoin = async() => {
    setloading(true)
    const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    setCoin(data)
    setloading(false)
    console.log(data)
  }
  useEffect(() => {
    getCoin()
  }, [id])
  const symbol = "$"
  return (
    <>
   {loading ? <LoadingComp/> : 
   <div className="flex flex-col md:flex-row bg-gray-950 text-white min-h-[100vh] items-start">
    <div>
     <div className="w-full md:w-[28vw] h-auto border-0 md:border-r-2 md:border-gray-900 flex flex-col items-center mt-5">
        <img src={coin.image.large} className="h-48 mb-4" alt="" />
        <div className="font-extrabold my-5 text-6xl">{coin.name}</div>
        <div className="mx-3 ml-3 md:ml-6 font-normal text-gray-200 text-sm md:text-xl">{coin.description.en.split(". ")[0]}</div>
      </div>
        <div className="font-bold text-xl md:text-3xl ml-4">
          <div>Rank: {numberWithCommas(coin.market_cap_rank)}</div>
          <div>Current Price: {numberWithCommas(coin.market_data.current_price.usd)}</div>
          <div>{symbol} {numberWithCommas(coin.market_data.market_cap.usd.toString().slice(0, -6))}M</div>
        </div>
      </div>
      <div className="chart">
        <CoinInfo coin={coin}/>
      </div>
    </div>
    }
    </>
  )
}

export default CoinPage
