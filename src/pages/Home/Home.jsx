import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explormanu from '../../components/Explormanu/Explormanu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {
  const [category,setCategory] =useState("All")
  return (
    <div>
      < Header/>
      <Explormanu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home