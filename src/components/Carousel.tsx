import { useEffect, useState } from 'react'
import { currency } from '../store'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
const Carousel = () => {
    const currentCurrency = useRecoilValue(currency)
    useEffect(() => {
        GetCoins()
    }, [])
    
    
    interface trendingCoinInter{
        name: string,
        id: number,
        image: string,
        symbol: string,
        price_change_percentage_24h: number
    }
    
    
    const [coin, setcoin] = useState<trendingCoinInter[]>([])
    const GetCoins= async()=>{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
        console.log(data)
        setcoin(data)
    }
    
    
    const items = coin.map((c) => {
        let price = c.price_change_percentage_24h >= 0;
        return (
        <Link to={`/coins/${c.id}`}>
            <img className='w-28 ' src={c.image} alt="" />
            <span className='text-white'>{c.symbol}</span>
            <span className='text-white'>{price && "+"} {c?.price_change_percentage_24h?.toFixed(2)}%</span>
        </Link>)
    })
    const responsive = {
      0: {
        items: 4
      },
      400: {
        items: 3
      }
    }
  
  return (
    <div className='flex flex-col justify-center'>
        <h1 className='text-center text-white font-bold text-5xl mt-4'>Crypto Monster</h1>
        <span className='text-center text-slate-100 font-light my-4'>Get all the info Regarding your Favorite Crypto Currency</span>
      <AliceCarousel mouseTracking infinite responsive={responsive} autoPlayInterval={1000} autoPlay disableDotsControls animationDuration={1500} disableButtonsControls items={items}/>
    </div>
  )
}

export default Carousel
