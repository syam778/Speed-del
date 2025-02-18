import React, { useContext } from 'react'
import './Card.css'
//import { StoreContext } from '../../context/Storecontext'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Card = () => {
const {cardItems,foodlist,removeFromCard,getTotalCardAmount,url} =useContext(StoreContext)  
const  navigate = useNavigate();
  return (
    <>
    <div>
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodlist.map((item,index)=>{
          if(cardItems[item._id]>0)
          {
            return(
              <div>
              <div className='card-items-title card-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{cardItems[item._id]}</p>
                <p>{item.price*cardItems[item._id]}</p>
                <p onClick={()=>removeFromCard(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })

        }
      </div>
      <div className="main-card">
      <div className="card-bottom">
        <div className="card-total">
          <h2>Card Totals</h2>
          </div>
        <hr />
        <div className="card-total-details">
          <p>Subtotal</p>
          <p>${getTotalCardAmount()}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <p>Delivary Fee</p>
          <p>${getTotalCardAmount()===0?0:5}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <p>Total</p>
          <p>$ {getTotalCardAmount()===0?0:getTotalCardAmount()+5}</p>
        </div>
        <button onClick={()=>navigate('/order')} className='btn'>Check out</button>
      
      </div>
      <div className="card-reelo">
        <div>
          <p className='addp'>if your a reelo code ,enter it here</p>
          <div className="card-reelocode-input">
            <input type="text" placeholder='reelo code' />
            <button className='bunn'>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Card
/*
.card-total{
 flex: 1;
 display: flex;
 flex-direction: row;
 gap: 20px;   
}
.card-total-details{
    display: flex;
    justify-content: space-between;
    color: black;
}
.card-totalhr{
    margin: 10px 0px;
}
.card-total button{
    border: none;
    color: antiquewhite;
    background-color: tomato;
    width: max(15vw,200px);
    padding: 12px 0px;
    border-radius: 5px;
    cursor: pointer;
}
.card-reelode{
    flex: 1;

}
.card-reelode p{
    color: black;
} 
.card-reelode-input{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: bisque;
}
.card-reelode-input input{
    background: transparent;
    border: none;
    outline: none;
    padding: max(10vw,150px);
    padding: 10px 5px;
    background-color: black;
    color: whitesmoke;
    border-radius: 5px;
}
    */


