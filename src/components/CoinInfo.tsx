import axios from "axios"
const CoinInfo = () => {
    
    const getAllCoins = async () => {
        const apiKey = process.env.API_Key
        console.log(apiKey)// Replace "YOUR_API_KEY" with your actual API key
        const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/USD?apikey=${apiKey}&invert=true&output_format=csv`)
        console.log(res)
    }
  return (
    <>
      <button onClick={getAllCoins}>Click me</button>
    </>
  )
}

export default CoinInfo
