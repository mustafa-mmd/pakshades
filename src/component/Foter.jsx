import React from 'react'
import "./Foter.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from "react-router-dom";
function Foter() {
  const openLink = (url) => {
    // window.open(url,'_blank' );
    window.location.href = url;

  };
  return (
    <div className='foter'>
      <div className='socialicon'>

<button onClick={() => openLink('https://www.facebook.com/share/1XkUsswaUy/')}>
<FacebookIcon />
</button>

<button onClick={() => openLink('https://www.instagram.com/pakshades_?igsh=bGQzaGkxcHRvYTJl')}>
<InstagramIcon />
</button>

{/* <button onClick={() => openLink('https://wa.me/+923189946083" target="_blank" rel="noopener noreferrer')}>
<WhatsAppIcon/>
</button> */}

</div>
      <ul className='foterul'>

<li className='foterlogo'>Pak Shades</li>
<li><NavLink to="/"  className="anchor">Home</NavLink></li>
<li><NavLink to="/about" className="anchor">About</NavLink></li>
<li><NavLink to="/products" className="anchor">Products</NavLink></li>
<li><NavLink to="/addtocart" className="anchor">Cart Items</NavLink></li>
<li><NavLink to="/contacts" className="anchor">Contacts</NavLink></li>

</ul>

<div className='policy'>
  <h5>
    Founder : @Babar Ali
  </h5>
  <h5>Phone / Whatsapp : 03189946083</h5>
  <h5>Email : babarali11377@gmail.com</h5>
</div>


    </div>
  )
}

export default Foter