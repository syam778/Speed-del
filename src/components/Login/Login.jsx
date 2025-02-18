import React, { useState } from 'react'
import './Login.css'
import { manuu } from '../../assets/manu'
import { useContext } from 'react'
//import { StoreContext } from '../../context/Storecontext'
import { StoreContext } from '../../Context/StoreContext'
//import { useEffect } from 'react'
import axios from "axios"

const Login = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)
    const [currentState,setCurrentState] =useState("login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const [register,setRegister] = useState("")
    
    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))

    }
    const onLogin = async (event)=>{
      event.preventDefault()
      
      let newUrl = url;
      if (currentState==="login"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data);
      if (response.data.success){

        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)

      }
      else{
        alert(response.data.message)
      }

    }
    /*
    useEffect(()=>{
      console.log(data)

    },[data])
    */
  return (
    <div className='login'>
        <form  onSubmit={onLogin} className='login-cont' >
            <div className="login-titel">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={manuu.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
              {currentState==="Login"?<></>:
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name'  required/>}
            <input  name='email' onChange={onChangeHandler} value={data.email} type="email"placeholder='your email' required />
            <input  name='password' onChange={onChangeHandler} value={data.password} type="password"  placeholder='password' required/>
            </div>
            <button type='submit' >{currentState==="sing up"?"Create account":"Login"}</button>
            <div className="login-condition">
              <input type="checkbox" required/>
              <p>By continuing i agree to the pravecy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>create a new account ? <span onClick={()=>setCurrentState("Sing up")}>chick here</span></p>
            :<p>already have a account ? <span onClick={()=>setCurrentState("Login")}>login here</span></p>
          }
            
           
        </form>
    </div>
  )
}

export default Login

