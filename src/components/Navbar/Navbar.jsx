import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext} from '../../context/Storecontext';
import { assets } from '../../../../admin/src/assets/assets';



const Navbar = ({setShowLogin}) => {
  const [manu,setManu] = useState("Home");
  const {getTotalCardAmount,token,setToken} = useContext(StoreContext);
  const navigate =useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <>
    <div className='navbar'>
      <Link to='/'><h3>Speed del</h3></Link>
     <ul className='navbar-manu'>
     <Link onClick={()=>setManu("Home")} className={manu ==="Home"?"active":""}>Home</Link>
     <a href='#exploremanu'  onClick={()=>setManu("Manu")} className={manu ==="Manu"?"active":""}>Manu</a>
     <a href='#food-display' onClick={()=>setManu("Mobile-app")} className={manu ==="Mobile-app"?"active":""}>Mobile-app</a>
     <a href='#footer' onClick={()=>setManu("Contact-us")} className={manu ==="Contact-us"?"active":""}>Contact-us</a>
     </ul>
     <div className="navbar-seartch">
      <img src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734856266/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector_mqthoi.jpg" alt="" />
      <div className="navbar-basket">
      <Link to='/card'><img src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734856263/istockphoto-1325904846-612x612_vmiely.jpg" alt="" /></Link>
        <div className={getTotalCardAmount()===0?"":"dot"}></div>
      </div>
      {!token?<button onClick={()=>setShowLogin(true)}>sing in</button>
      :<div className='navbar-profile'>
        <img src={assets.admin} alt="" />
        <ul className="nav-profile-down">
          <li onClick={()=>navigate("/myorders")}><img src={assets.order} alt="" /><p>Order</p></li>
          <hr />
          <li onClick={logout}><img src={assets.booking} alt="" /><p>Logout</p></li>
        </ul>
        </div>}
      
     </div>
    </div>
    
    </>
  )
}

export default Navbar

/*
<div className='navbar'>
      <h3>Speed del</h3>
      <div className="nav">
        <>home</span>
        <span>manu</span>
        <div>mobile app</div>
        <div>contact us</div>
      </div>
      <div className="nav1">
        <img src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734808574/search_icon_wqyrv8.png" alt="" />
        <img src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734808512/basket_icon_abprvy.png" alt="" />
        <img src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734808511/bag_icon_p9coxw.png" alt="" />
        <button type='button' value={button}>sing in</button>
      </div>
    </div>
    */