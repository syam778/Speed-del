
import React, { useContext } from 'react'
//import React, { useContext, useState } from 'react'
import './Fooditem.css'
//import { foodlist, manuu} from '../../assets/manu'
import { foodlist } from '../../assets/manu'
import { StoreContext } from '../../Context/StoreContext'
const Fooditem = ({ id, name, price, image,description,rating,add,remove}) => {
    //const [itemCount, setItemCount] = useState(0) rating,add,remove
    const {cardItems,addToCard,removeFromCard,url} =useContext(StoreContext)
    return (

        <div className='food-item'>
            <div className="food-item-image-cont">
                <img className='food-item-image'  src={url+"/images/"+image} alt="" />
                {!cardItems[id]
                    ? <img className='add' onClick={()=>addToCard(id)} src={add} alt="" />
                    :<div className='food-item-add'>
                        <img className='remove' onClick={()=>removeFromCard(id)} src={remove} alt="" />
                        <p>{cardItems[id]}</p>
                        <img className='addd' onClick={()=>addToCard(id)} src={add} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-reting">
                    <p>{name}</p>
                    <img src={rating} alt="" />
                </div>
                <p className='food-item-des'>{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>

    )
}

export default Fooditem;

/*

url+"/images/"+

import React, {  useState } from 'react'
import './Fooditem.css'
import { manuu } from '../../assets/manu'
import { StoreContext } from '../../context/Storecontext'

const Fooditem = ({ id, name, price, image, rating,add,remove, }) => {
    const [itemCount, setItemCount] = useState(0)
   
    return (

        <div className='food-item'>
            <div className="food-item-image-cont">
                <img className='food-item-image' src={image} alt="" />
                {!itemCount
                    ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={add} alt="" />
                    :<div className='food-item-add'>
                        <img className='remove' onClick={()=>setItemCount(prev=>prev-1)} src={remove} alt="" />
                        <p>{itemCount}</p>
                        <img className='addd' onClick={()=>setItemCount(prev=>prev+1)} src={add} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-reting">
                    <p>{name}</p>
                    <img src={rating} alt="" />
                </div>
                <p className="food-item-price">${price}</p>
            </div>
        </div>

    )
}

export default Fooditem
*/