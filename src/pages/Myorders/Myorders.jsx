import React, { useContext, useEffect, useState } from 'react'
import './myorders.css'
//import { StoreContext } from '../../Context/StoreContext';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../../../admin/src/assets/assets';
import { foodlist } from '../../assets/manu';

const Myorders = () => {
    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data)
        
    }
    useEffect(()=>{
        if (token){fetchOrders();
        }

    },[token])

  return (
    <div className='myorders'>
        <h2>My Orders</h2>
        <div className="coin">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-order">
                        <img src={assets.parcel} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index ===order.items.length){
                                return item.name + item.quantity

                            }
                            else{
                                return item.name  +item.quantity+","
                            }

                        })}</p>
                        <p>${order.amount}.00</p>
                        
                            <span className='store-data'><p>{order.items.map((item,index)=>{
                            if (index ===order.items.length){
                                return item.city

                            }
                            else{
                                return item.city
                            }

                        })}</p> <p>{order.items.map((item,index)=>{
                            if (index ===order.items.length){
                                return item.street

                            }
                            else{
                                return item.street
                            }

                        })}</p> <p>{order.items.map((item,index)=>{
                            if (index ===order.items.length){
                                return item.phone

                            }
                            else{
                                return item.phone
                            }

                        })}</p><p>{order.items.map((item,index)=>{
                            if (index ===order.items.length){
                                return item.firstName

                            }
                            else{
                                return item.firstName
                            }

                        })}</p></span>
            
                        <p>{order.phone}</p>
                        <p>items:{order.items.length}</p>
                        <p className='status'><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button  onClick={fetchOrders}>Track Order</button>
                    </div>
                    
                )
            })}
        </div>
    
    </div>
  )
}

export default Myorders

//<span><p>{item.street}</p><p>{item.phone}</p><p>{item.city}</p><p>{item.firstName}</p></span>
