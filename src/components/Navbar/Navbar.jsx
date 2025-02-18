import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
//import { StoreContext} from '../../context/Storecontext.js';
import { StoreContext } from '../../Context/StoreContext.jsx';
//import { assets } from '../../../../admin/src/assets/assets';
//import { assets } from "/assets/assets";  // assuming assets are placed in the public folder
import { assets } from "../../assets/assets"; // Adjust the relative path accordingly





const Navbar = ({setShowLogin}) => {
  const [manu,setManu] = useState("Home");
  const {getTotalCardAmount,token,setToken,} = useContext(StoreContext);
  const {search,setSearch} =useState({
    name:""
  })


  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setSearch(data=>({...data,[name]:value}))

  }
    
 
  
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
      <form action='search' className='sea' onSubmit={(e) =>e.preventDefault}><div className='seartch'><input type="text" onChange={(e) =>onChangeHandler} value={search} name='search' placeholder='Seartch Now' className='seartch-input sea' /><img className='seartch-icon' src="https://res.cloudinary.com/doeaksurq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734856266/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector_mqthoi.jpg" alt="" /></div></form>
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
