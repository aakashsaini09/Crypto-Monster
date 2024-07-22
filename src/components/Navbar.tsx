// import { TrendingCoins } from '../store/Config'

// import { Select } from "@mui/material"
import { Link } from "react-router-dom"
// import { currency } from "../store"

const Navbar = () => {
  return (<>
<nav className="bg-gray-950 text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="flex items-center space-x-3 rtl:space-x-reverse">
        <Link to={'/'} className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap text-yellow-300">Flowbite</Link>
    </span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
        <li>
          <a href="https://github.com/aakashsaini09/Crypto-Monster.git" target="_blank" className="py-2 px-3" aria-current="page">Github Code</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 md:p-0">Linkedin</a>
        </li>
        <li>
        {/* <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select> */}
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
