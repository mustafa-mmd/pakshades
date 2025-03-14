import React from 'react'
import "./Home.css"
import Navbar from "./Navbar"
import Card from "./Card"
// import hero from "../assets/hero3.jpeg";
import img1 from "../assets/sunglass1.jpg";
import img2 from "../assets/sunglass2.jpg";
import img3 from "../assets/sunglass3.jpg";
import img4 from "../assets/sunglass4.jpg";
import img5 from "../assets/sunglass5.jpg";
import img6 from "../assets/sunglass6.jpg";
import img7 from "../assets/sunglass7.jpg";
import img8 from "../assets/sunglass8.jpg";
// import img10 from "../assets/sunglass10.jpeg"
import Footer from './Foter';

function Home({ addToCart }) {
  const products = [
    { img: img1, title: "CatEye", price: 25, description:"img one description" },

    { img: img2, title: "Sunglass 2", price: 30 , description:"img two description"},

    { img: img3, title: "Sunglass 3", price: 28, description:"img three description" },

    { img: img4, title: "Sunglass 4", price: 35, description:"img four description" },

    { img: img5, title: "Sunglass 5", price: 22 , description:"img five description"},

    { img: img6, title: "Sunglass 6", price: 27 , description:"img six description"},

    { img: img7, title: "Sunglass 7", price: 32, description:"img seven description" },

    { img: img8, title: "Sunglass 8", price: 29, description:"img eight description" },
  ];

  return (
    <>
      <Navbar />
      <div className='herosection'>
        <div className='heroleft'>
          <h1>Grab UpTo <span className='spanele'>50%</span> Off On Selected Sun Glasses</h1>
          <button className='herobutt'>Buy Now</button>
        </div>
        {/* <div className='heroright'>
        <img src={hero} className='heroimg' alt="Hero" />
        </div> */}

        <div className='imgslider3D'>
        <div className="slider">
        <div className="slide"><img src={img1} alt="Image 1"/></div>
        <div className="slide"><img src={img2} alt="Image 2"/></div>
        <div className="slide"><img src={img3} alt="Image 3"/></div>
        <div className="slide"><img src={img4} alt="Image 4"/></div>
        <div className="slide"><img src={img5} alt="Image 5"/></div>
        
        
        
    </div>
        </div>

      </div>
      <h1 style={{ marginLeft: "22%" }}>Sun Glasses For You!</h1>

      <div className='cardcontainer'>
        {products.map((product, index) => (
          <Card key={index} img={product.img} title={product.title} price={product.price} description={product.description} addToCart={addToCart} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Home;

