import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { currency } from "../store"
import { TextField } from "@mui/material"
const CoinTable = () => {
    const currentCurrency = useRecoilValue(currency)
    // useEffect(() => {
    //     GetCoins()
    // }, [])
    interface allcoins{
        name: string,
        id: number,
        image: string,
        symbol: string,
        price_change_percentage_24h: number,
        current_price: string
    }
    const [coins, setcoins] = useState<allcoins[]>([])
    console.log("Into the comp")
    const GetCoins= async()=>{
        console.log("Into the eff")
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
        setcoins(data)
        console.log(data)
    }
   return (
    <div>
        <div className="top">
            <h1 className="text-white text-4xl font-semibold text-center">Cryptocurrency Prices by Market Cap</h1>
        </div>
        <div className="w-full text-white">
        <TextField id="outlined-basic" color="secondary" label="outlined" className="outline-1 outline-white border-2 border-white w-full"/>
        </div>
      <table>
        <thead></thead>
      </table>
    </div>
  )
}

export default CoinTable
