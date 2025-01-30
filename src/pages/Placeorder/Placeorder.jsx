import React, { useContext, useEffect, useState } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/Storecontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Placeorder = () => {
  const {getTotalCardAmount,token,foodlist,cardItems,url} =useContext(StoreContext)
  const [data,setData] = useState({
    firseName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  

  const onChangeHandler = (event) =>{
    const name =event.target.name;
    const value =event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async(event) =>{
    event.preventDefault();
    let orderItems =[];
    foodlist.map((item)=>{
    if (cardItems[item._id]>0){
      let itemInfo = item;
      itemInfo["quantity"] = cardItems[item._id];
      orderItems.push(itemInfo);
    }
  })
  let orderData = {
    address:data,
    items:orderItems,
    amount:getTotalCardAmount()+5,
  }
  let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
  if (response.data.success){
    const {session_url} = response.data;
    window.location.replace(session_url);
  }

  else{
    alert("Error");
  }
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/card")

    }
    else if(getTotalCardAmount()===0){
      navigate("/card")
    }

  },[token])

  
  return (
    <div className='order'>
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Informetion</p>
        <div className="order-info">
          
          <input required name='firseName' onChange={onChangeHandler} value={data.firseName} type="text" placeholder='First name' />
          <input required  name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required type="email" name='email'onChange={onChangeHandler} value={data.email} placeholder='Email-address' />
        <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
        <div className="order-info">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
          </div>
          <div className="order-info">
          <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
          <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
          </div>
          <input required type="number" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Pnone Number' />
        </div>
        <div className="place-order-right">
        <div className="card-bottom">
        <div className="card-total">
          <h2>Card Totals</h2>
          </div>
        <hr />
        <div className="card-total-details">
          <p>Subtotal</p>
          <p className='u'>${getTotalCardAmount()}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <p>Delivary Fee</p>
          <p className='u'>${getTotalCardAmount()===0?0:5}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <p>Total</p>
          <p className='u'>${getTotalCardAmount()===0?0:getTotalCardAmount()+5}</p>
        </div>
        <button  type='submit' className='btn'>Proceed To Payment</button>
      
      </div>
      <div className="pay">
      <h3>Payment Method</h3>
      <div className="payment ">
        <input type="radio" name="cash" id="cash" /><p className='polt'>COD <b className='bolt'>(cash on Delivary)</b></p>
      </div>
      <div className="payment">
        <input type="radio" name="card" id="card" /><p className='polt'>Online <b className='bolt'>(credit/debit)</b></p>
      </div></div>
          </div>
      </form>
      

    </div>
  )
}

export default Placeorder
/*
<input className="input"{...register("password", { required: { value: true, message: "job is reqired" }, minLength: { value: 5, message: "min leangth  of password" }, maxLength: { value: 12, message: "max length 12 only" } })} type="password" placeholder="password" /><br /><br />
          {errors.password && <div className="red">{errors.password.message}</div>}
  */        