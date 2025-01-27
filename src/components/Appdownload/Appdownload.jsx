import React from 'react'
import './Appdownload.css'
import { manuu } from '../../assets/manu'
const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br />Speed del App</p>
        <div className="app-download-platfrom">
            <img src={manuu.play_store} alt="" />
            <img src={manuu.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload