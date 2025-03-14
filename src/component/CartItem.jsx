import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cartitem.css";
import Navbar from "./Navbar";
import Foter from "./Foter";

function CartItem({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/buy", { state: { item } }); // Navigate to BuyPage with selected item
  };

  return (
    <>
      <Navbar />
      <h1 className="carth1">Your Cart</h1>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <div className="cartbuttdiv">
                  <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                  <button className="button" onClick={() => handleBuyNow(item)}>Buy Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Foter />
    </>
  );
}

export default CartItem;
