// import React from 'react'
// import "./Home.css"
// import Navbar from "./Navbar"
// import Card from "./Card"
// import hero from "../assets/hero3.jpeg";
// import img1 from "../assets/sunglass1.jpg";
// import img2 from "../assets/sunglass2.jpg";
// import img3 from "../assets/sunglass3.jpg";
// import img4 from "../assets/sunglass4.jpg";
// import img5 from "../assets/sunglass5.jpg";
// import img6 from "../assets/sunglass6.jpg";
// import img7 from "../assets/sunglass7.jpg";
// import img8 from "../assets/sunglass8.jpg";
// import Foter from './Foter';

// function Home() {
//   return (
//     <>
//       <Navbar/>
//       <div className='herosection'>
//         <div className='heroleft'>
//           <h1>Grab UpTo <span className='spanele'>50%</span> Off On Selected Sun Glasses</h1>
//           <button className='herobutt'>Buy Now</button>
//         </div>
//         <div className='heroright'>
//           <img src={hero} className='heroimg' alt="Hero" />
//         </div>
//       </div>
//       <h1 style={{ marginLeft: "20%" }}>Sun Glasses For You!</h1>

//       <div className='cardcontainer'>
//         <Card img={img1}/>
//         <Card img={img2}/>
//         <Card img={img3}/>
//         <Card img={img4}/>
//         <Card img={img5}/>
//         <Card img={img6}/>
//         <Card img={img7}/>
//         <Card img={img8}/>
//       </div>

//       <Foter/>
//     </>
//   )
// }

// export default Home;


// import React, { useState } from 'react';
// import "./Home.css";
// import Navbar from "./Navbar";
// import Card from "./Card";
// import CartItem from "./CartItem"; // Import CartItem component
// import hero from "../assets/hero3.jpeg";
// import img1 from "../assets/sunglass1.jpg";
// import img2 from "../assets/sunglass2.jpg";
// import img3 from "../assets/sunglass3.jpg";
// import img4 from "../assets/sunglass4.jpg";
// import img5 from "../assets/sunglass5.jpg";
// import img6 from "../assets/sunglass6.jpg";
// import img7 from "../assets/sunglass7.jpg";
// import img8 from "../assets/sunglass8.jpg";
// import Foter from './Foter';

// function Home() {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to handle Add to Cart
//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const products = [
//     { img: img1, title: "RayBan Classic", price: 25 },
//     { img: img2, title: "Polarized Shades", price: 30 },
//     { img: img3, title: "Aviator Style", price: 28 },
//     { img: img4, title: "Round Sunglasses", price: 22 },
//     { img: img5, title: "Mirror Lens", price: 35 },
//     { img: img6, title: "Sporty Look", price: 27 },
//     { img: img7, title: "Vintage Frame", price: 20 },
//     { img: img8, title: "Luxury Design", price: 40 },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className='herosection'>
//         <div className='heroleft'>
//           <h1>Grab UpTo <span className='spanele'>50%</span> Off On Selected Sun Glasses</h1>
//           <button className='herobutt'>Buy Now</button>
//         </div>
//         <div className='heroright'>
//           <img src={hero} className='heroimg' alt="Hero" />
//         </div>
//       </div>

//       <h1 style={{ marginLeft: "20%" }}>Sun Glasses For You!</h1>
 
//       <div className='cardcontainer'>
//         {products.map((product, index) => (
//           <Card 
//             key={index} 
//             img={product.img} 
//             title={product.title} 
//             price={product.price} 
//             addToCart={addToCart}
//           />
//         ))}
//       </div>

//       {/* Cart Items Section */}
       
//         <h2 style={{ marginLeft: "20%" }}>Your Cart</h2>
//       <CartItem cartItems={cartItems} />
//       <Foter/>
//     </>
//   );
// }

// export default Home;

import React from 'react'
import "./Home.css"
import Navbar from "./Navbar"
import Card from "./Card"
import hero from "../assets/hero3.jpeg";
import img1 from "../assets/sunglass1.jpg";
import img2 from "../assets/sunglass2.jpg";
import img3 from "../assets/sunglass3.jpg";
import img4 from "../assets/sunglass4.jpg";
import img5 from "../assets/sunglass5.jpg";
import img6 from "../assets/sunglass6.jpg";
import img7 from "../assets/sunglass7.jpg";
import img8 from "../assets/sunglass8.jpg";
import Footer from './Foter';

function Home({ addToCart }) {
  const products = [
    { img: img1, title: "Sunglass 1", price: 25 },
    { img: img2, title: "Sunglass 2", price: 30 },
    { img: img3, title: "Sunglass 3", price: 28 },
    { img: img4, title: "Sunglass 4", price: 35 },
    { img: img5, title: "Sunglass 5", price: 22 },
    { img: img6, title: "Sunglass 6", price: 27 },
    { img: img7, title: "Sunglass 7", price: 32 },
    { img: img8, title: "Sunglass 8", price: 29 },
  ];

  return (
    <>
      <Navbar />
      <div className='herosection'>
        <div className='heroleft'>
          <h1>Grab UpTo <span className='spanele'>50%</span> Off On Selected Sun Glasses</h1>
          <button className='herobutt'>Buy Now</button>
        </div>
        <div className='heroright'>
          <img src={hero} className='heroimg' alt="Hero" />
        </div>
      </div>
      <h1 style={{ marginLeft: "20%" }}>Sun Glasses For You!</h1>

      <div className='cardcontainer'>
        {products.map((product, index) => (
          <Card key={index} img={product.img} title={product.title} price={product.price} addToCart={addToCart} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home;

