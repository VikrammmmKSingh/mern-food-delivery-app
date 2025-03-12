import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import { StoreContext } from '../../../Context/StoreContext';
import { assets } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart' id="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (<div>
              <div className="cart-item-info cart-items-title">
                <img src={item.image} alt="" />

                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className='cross'><img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(item._id)} className='remove-icon' /></p>
              </div>
              <hr />
            </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal:</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee:</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total:</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>

          <button onClick={() => navigate("/placeorder")}> Proceed to Checkout</button>
        </div>


        <div className="cart-promocode">
          <p>Apply promo code</p>
          <div className="cart-promo-code-in">
            <input type='text' placeholder='Promo code' />
            <button>Apply</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart