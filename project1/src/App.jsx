import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart/cart'
import Placeorder from './Components/Pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import Loginpop from './Components/LoginPopup/Loginpop'
import { useState } from 'react'
const App = () => {
  const[Login,setShowLogin]=useState(false);
  return (<>
  {Login?<Loginpop setShowLogin={setShowLogin}></Loginpop>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/placeorder' element={<Placeorder></Placeorder>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App