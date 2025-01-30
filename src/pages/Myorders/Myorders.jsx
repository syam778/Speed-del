import React, { useContext, useEffect, useState } from 'react'
import './myorders.css'
//import { StoreContext } from '../../Context/StoreContext';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { assets } from '../../../../admin/src/assets/assets';

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
                        <p>items:{order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button  onClick={fetchOrders}>Track Order</button>
                    </div>
                    
                )
            })}
        </div>
    
    </div>
  )
}

export default Myorders

