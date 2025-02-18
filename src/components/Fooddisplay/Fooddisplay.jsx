import React from 'react'
import './Fooddisplay.css'
import { useContext } from 'react'
//import { StoreContext } from '../../context/Storecontext'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const Fooddisplay = ({category}) => {
    const {foodlist} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {foodlist.map((item,index)=>{
              if(category==="All" || category===item.category){              
                return <Fooditem key={index} id={item._id} name={item.name}description={item.description} add={item.add} remove={item.remove} rating={item.rating} price={item.price}city={item.city} phone={item.phone} firstName={item.firstName} street={item.street} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}

export default Fooddisplay