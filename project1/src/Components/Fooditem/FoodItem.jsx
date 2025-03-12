import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
// import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {

  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-image-container">
            <img  className="food-item-img" src={image} alt=""></img>
            {!cartItems[id]?<img src={assets.add_icon_white} className="add" onClick={()=>addToCart(id)} />:
            <div className="food-item-counter">
                <img className="minus" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)}/>
            </div>
}
        
            </div>
            
        <div className="food-item-info">
            <div className="food-item-rating">
      
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>$ {price}</p>
            </div>
        </div>
  )
}

export default FoodItem