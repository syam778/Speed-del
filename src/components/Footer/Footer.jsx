import React from 'react'
import './Footer.css' 
import { manuu } from '../../assets/manu'

const Footer = () => {
  
  return (
    <div className='footer' id='footer'>
        <div className="footer-cont">
            <div className="footer-cont-left">
                <h2>speed del</h2>
                <p>Say goodbye to the hassle of store visits and enjoy the convenience of fresh milk delivered right to your home! With our online delivery service, you can</p>
                <div className="footer-s-icon">
                    <img src={manuu.fb} alt="" />
                    <img src={manuu.insta} alt="" />
                    <img src={ manuu.yout} alt="" />
                    <img src={manuu.inl} alt="" />
                    <img src={manuu.git} alt="" />
                </div>
            </div>
            <div className="footer-cont-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-cont-right">
                <h2>Get start</h2>
                <ul>
                    <li>+91-7227-963-777</li>
                    <li>contact@speeddel.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 speed del .com -All Right Reserved</p>
    </div>
  )
}

export default Footer