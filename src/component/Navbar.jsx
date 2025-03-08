import React,{ useState } from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='nav'>
      <ul className='navul'>

        <li className='logo'>Pak Shades</li>
        <li className='navli'><NavLink to="/" >Home</NavLink></li>

        <li><NavLink to="/about" >About</NavLink></li>

        <li><NavLink to="/products" >Products</NavLink></li>

        <li><NavLink to="/cartitem" >Cart Items</NavLink></li>

        <li><NavLink to="/contacts" >Contacts</NavLink></li>
        
      </ul>
    </div>
  )
}

export default Navbar