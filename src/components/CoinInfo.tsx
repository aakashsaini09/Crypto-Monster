import axios from "axios"
import {parse} from "papaparse"
import { useState } from "react"
const CoinInfo = () => {
    interface coinInterFace {
      time: string,
      rate: string,
      asset_id_quote: string
    }
    const [data, setdata] = useState<coinInterFace[]>([])
    const getAllCoins = async () => {
        const apiKey = import.meta.env.VITE_API_KEY
        const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/USD?apikey=${apiKey}&invert=true&output_format=csv`)
        const parseResult = parse(res.data, {header: true})
        // @ts-ignore
        const parseData = parseResult.data
        setdata(parseData)
        // console.log("data is::", data)
        // setdata([{
        //   asset_id_quote: "BITCOIN",
        //   rate: "0.2385418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // }, {
        //   asset_id_quote: "ETH",
        //   rate: "0.73652385418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },{
        //   asset_id_quote: "SOLANA",
        //   rate: "12.418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },{
        //   asset_id_quote: "BOB",
        //   rate: "1.3652385418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },{
        //   asset_id_quote: "DOTCOIN",
        //   rate: "0.418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },{
        //   asset_id_quote: "$BURN",
        //   rate: "2.8455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },{
        //   asset_id_quote: "RUST",
        //   rate: "5.3652385418455724165792",
        //   time: "2024-07-16T07:43:38.0000000Z"
        // },])
    }
    const [currentVal, setcurrentVal] = useState("")
    if (currentVal == "big") {
      data.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate))
    }else if(currentVal == "small"){
      data.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate))
    }
  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <button className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={getAllCoins}>Click me</button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <div className="md:mx-11 mx-2">
              <span className="gap-3">
                <button className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setcurrentVal("big")}>Bigg</button>
                <button className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setcurrentVal("small")}>Small</button>
                <button className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setcurrentVal("name")}>Name</button>
              </span>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-2 border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  { data.map((e, i) => {
                    return <tr key={i} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {i+1}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {e.asset_id_quote}
                        </th>
                        <td className="px-6 py-4">
                        ${parseFloat(e.rate).toFixed(8)}
                        </td>
                        <td className="px-6 py-4">
                        {new Date(e.time).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr> }) }
                </tbody>
            </table>
            </div>
        </div>
    </div>
    </>
  )
}



export default CoinInfo
