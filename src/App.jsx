import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Contacts from "./component/Contacts";
import CartItem from "./component/CartItem";
function App() {
  
  const [cartItems, setCartItems] = useState([]); // ✅ Cart state defined

  // ✅ Add to Cart function
  const addToCart = (item) => {
    if (!cartItems.some(cartItem => cartItem.img === item.img)) {
      setCartItems([...cartItems, item]);
    }
  };

  // ✅ Remove from Cart function
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.img !== item.img));
  };
  return (
    <Router>
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route 
          path="/" 
          element={<Home cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/cartitem" element={<CartItem />} /> */}
        <Route 
          path="/cartitem" 
          element={<CartItem cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </Router>
  );
}

export default App;
