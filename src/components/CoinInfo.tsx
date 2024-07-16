import axios from "axios"
import {parse} from "papaparse"
import { useState } from "react"
const CoinInfo = () => {
    interface coinInterFace {
      time: String,
      rate: String,
      asset_id_quote: String
  }
    const [data, setdata] = useState<coinInterFace[]>([])
    const getAllCoins = async () => {
        const apiKey = import.meta.env.VITE_API_KEY
        const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/USD?apikey=${apiKey}&invert=true&output_format=csv`)
        const parseResult = parse(res.data, {header: true})
        // @ts-ignore
        const parseData = parseResult.data
        // const result: coinInterFace = parseData.dat
        setdata(parseData)
        console.log("data is::", data)
    }
  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={getAllCoins}>Click me</button>
      { data.map((e, i) => {
        return <div key={i} className="flex gap-5">
          <div className="my-3 border-2 border-black">Time: {e.time}</div>
          <div className="my-3 border-2 border-black">Rate: {e.rate}</div>
          <div className="my-3 border-2 border-black">{e.rate}</div>
        </div>
      })}
      </div>
    </>
  )
}



export default CoinInfo
