import Carousel from './Carousel'
import './Navbar.css'
// import { TrendingCoins } from '../store/Config'

const Navbar = () => {
  
  

  return (<>
<nav className="bg-gray-950 text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap text-yellow-300">Flowbite</span>
    </span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
        <li>
          <a href="#" className="py-2 px-3" aria-current="page">Home</a>
        </li>
        
        <li>
          <a href="#" className="py-2 px-3 md:p-0">Services</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 md:p-0">Pricing</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className="banner h-[40vh] w-full">
      <div className='w-full pl-28'>
        <Carousel/>
      </div>
    </div>
    </>
  )
}

export default Navbar
