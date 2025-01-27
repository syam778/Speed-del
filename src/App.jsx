import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Card from './pages/Card/Card'
import Placeorder from './pages/Placeorder/Placeorder'
import Verify from './pages/Veryfy/Verify'
import Myorders from './pages/Myorders/Myorders'


const App = () => {
  const [showLogin,setShowLogin] =useState(false)
  return (
  <>
  {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      < Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/card' element={<Card/>}/>
      < Route path='/order' element={<Placeorder/>}/> 
      < Route path='/verify' element={<Verify/>}/>
      < Route path='/myorders' element={<Myorders/>}/>   
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App