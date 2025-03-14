import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Contacts from "./component/Contacts";
import CartItem from "./component/CartItem";
import BuyPage from "./component/BuyPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.some(cartItem => cartItem.img === item.img)) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.img !== item.img));
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} 
      />
      <Route path="/about" element={<About />} />
      <Route 
        path="/products" 
        element={<Products cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} 
      />
      <Route 
        path="/cartitem" 
        element={<CartItem cartItems={cartItems} removeFromCart={removeFromCart} />} 
      />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/buy" element={<BuyPage />} />
    </Routes>
  );
}

export default App;
