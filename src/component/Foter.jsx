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
<>
<footer>
<div>
            <div className="footer-container">
                {/* left side  */}
                <div className="company-info">
                    <h1 className="logo">Pak_shades</h1>
                  <p>Shield your eyes in style – premium sunglasses that blend fashion with UV protection. See the world clearer, shine brighter!..</p>
                  <div className="socials">
                    <div className='i'><button onClick={() => openLink('https://wa.me/923189946083?text=Hello%20PakShades%20Team!', '_blank')}>
<WhatsAppIcon style={{fontSize:"22px"}}/>
 </button></div>

 <div className='i'><button onClick={() => openLink('https://www.instagram.com/pakshades_?igsh=bGQzaGkxcHRvYTJl', '_blank')}>
 <InstagramIcon  style={{fontSize:"22px"}}/>
</button></div>

<div className='i'><button onClick={() => openLink('https://www.facebook.com/share/1XkUsswaUy/', '_blank')}>
 <FacebookIcon  style={{fontSize:"22px"}}/>
</button></div>

 </div>
 </div>

 {/* right side  */}
 <div className="web-pages">
<div>
 <h3>Information</h3>
                    
<NavLink to="/"  className="anchor"><p>Home</p></NavLink>
<NavLink to="/about" className="anchor"><p>About</p></NavLink>
<NavLink to="/products" className="anchor"><p>Products</p></NavLink>
<NavLink to="/addtocart" className="anchor"><p>Cart Items</p></NavLink>
<NavLink to="/contacts" className="anchor"><p>Contacts</p></NavLink>
                  </div>
                  <div>
                    <h3>Company</h3>
                    <p>Community</p>
                    <p>Career</p>
                    <p>Our story</p>
                  </div>
                  <div>
                    <h3>Contacts</h3>
                  <p>WhatsApp: 03189946083</p>
                  <p>Gmail: babarali11377@gmail.com</p>
                  <p>Instagram: pakshades_</p>
                  <p>Facebook :  https://www.facebook.com/share/1XkUsswaUy/ </p>
                  </div>
                </div>
              </div>
 </div>
</footer>
</>
  )
}

export default Foter