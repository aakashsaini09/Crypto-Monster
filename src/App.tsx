import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import CoinPage from './components/CoinPage'
import Navbar from './components/Navbar'
function App() {
  // CG-mXJ47r5shSAt8nmMxmziysKp
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins/:id' element={<CoinPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
