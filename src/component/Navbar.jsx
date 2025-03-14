import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div className='nav-header'>
        <div className='logo'>Pak_Shades</div>
        <div className='hamburger' onClick={toggleNavbar}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={36} />}
        </div>
      </div>
      <ul className={isOpen ? 'navul open' : 'navul'}>
        <li className='navli'><NavLink to='/' onClick={toggleNavbar}>Home</NavLink></li>
        <li><NavLink to='/about' onClick={toggleNavbar}>About</NavLink></li>
        <li><NavLink to='/products' onClick={toggleNavbar}>Products</NavLink></li>
        <li><NavLink to='/cartitem' onClick={toggleNavbar}>Cart Items<span><FaShoppingCart size={25} style={{ position: "relative", top: "4px" }} /></span></NavLink></li>
        <li><NavLink to='/contacts' onClick={toggleNavbar}>Contacts</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;




