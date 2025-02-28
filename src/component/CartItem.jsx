import React from "react";
import "./Cartitem.css"

function CartItem({ cartItems, removeFromCart }) {
  return (
    <>
    <h1 className="carth1">Your Cart</h1>
    
    <div className="cart-container">
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.title} className="cart-img"/>
            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default CartItem;
