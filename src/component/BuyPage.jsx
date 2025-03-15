import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import Foter from "./Foter"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./BuyPage.css";
import { useState } from "react";
const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {}; // Get item from state

  const handleRemoveFromCart = () => {
    navigate("/"); // Navigate back to HOme
  };

  //emailjs form setting

  const form = useRef();

  const sendOrder = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xg5te3x",  // Replace with EmailJS Service ID
        "template_fahyg8l", // Replace with EmailJS Template ID
        form.current,
        "BlM1l-4OJ9y1MkbTa"   // Replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("Order placed successfully! 🎉");
        },
        (error) => {
          console.error("Failed to send order:", error);
          alert("Something went wrong! Try again.");
        }
      );
  };
  //for counter
  const [count, setCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);

const increment = () => {
  const newCount = count + 1;
  setCount(newCount);
  setTotalPrice(newCount * (item?.price || 0)); // Multiply count with item price
};

const decrement = () => {
  if (count > 0) {
    const newCount = count - 1;
    setCount(newCount);
    setTotalPrice(newCount * (item?.price || 0));
  }
};

  return (
    <>
    <Navbar/>
    <div className="buycont">
   
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Buy Page</h1>
      {item ? (
        <div>
          <img src={item.img} alt={item.title} style={{ width: "350px", borderRadius: "10px" }} />
          <h2>{item.title}</h2>
          <p>Details : {item.description}</p>
          <p>Price : {item.price} PKR</p>
          
          <button className="remove-btn" onClick={handleRemoveFromCart}>
            Remove from Buy
          </button>
          <button className="herobutt" style={{width:"50px"}} onClick={decrement}>-</button>
          <button style={{padding:"5px 16px" }}>{count}</button>
          <button className="herobutt"style={{width:"60px"}}  onClick={increment}>+</button>
        </div>
      ) : (
        <p>No item selected.</p>
      )}
    </div>
    {/* form data setting */}
    <form ref={form} onSubmit={sendOrder} className="order-form-container">
      <h2 className="form-title">Place Your Order 🕶</h2>
      
      <input type="text" name="name" placeholder="Full Name" required className="form-input" />
      <input type="email" name="email" placeholder="Email Address" required className="form-input" />
      <input type="tel" name="phone" placeholder="Phone Number" required className="form-input" />
      
      <input type="text" name="address" placeholder="Street Address" required className="form-input" />
      <input type="text" name="city" placeholder="City" required className="form-input" />
      <input type="text" name="postal_code" placeholder="Postal Code" required className="form-input" />
      
      <input type="text" name="product_name" placeholder="Product Name" required className="form-input" />
      {/* Quantity Input Field */}
<input 
  type="text" 
  name="quantity" 
  placeholder="Quantity" 
  required 
  className="form-input" 
  value={`Total: ${count}`} 
  readOnly 
/>

{/* Total Price Input Field */}
<input 
  type="text" 
  name="total_price" 
  placeholder="Total Price (PKR)" 
  required 
  className="form-input" 
  value={`Total Price: ${totalPrice} PKR`} 
  readOnly 
/>

      
      <textarea name="message" placeholder="Type Message Here" className="form-textarea"></textarea>

      <button type="submit" className="form-button">
        Submit Order 
      </button>
    </form>
    
    </div>
    <Foter/>
    </>
  );
};

export default BuyPage;


