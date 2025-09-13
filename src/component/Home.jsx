import React from 'react'
import "./Home.css"
import Navbar from "./Navbar"
import Card from "./Card"
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
    { img: img1, title: "Ray-ban", price: 1100, description:"- Iconic Style & Timeless Elegance" },

    { img: img2, title: "Square Sunglass", price: 1299 , description:" Luxury-black-Square-Rimless-Sunglass"},

    { img: img7, title: "Cat-Eye", price: 999, description:"Elegant trasparent cat-eye sunglass" },

    { img: img4, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },

    { img: img5, title: "Square Sunglass", price: 1299 , description:"Luxury-Square-Rimless-Sunglass"},

    { img: img6, title: "Cat-Eye", price: 999 , description:"Elegant white cat-eye sunglass"},

    { img: img3, title: "Square Sunglass", price: 1299, description:"Luxury-Orange-Square-Rimless-Sunglass" },

    { img: img8, title: "Ray-ban Bold square sunglass", price: 999, description:"Bold square shaped frame with a matte black finish and dark lenses" },

    // { img: img9, title: "Sunglass 9", price: 29, description:"img eight description" },

    // { img: img10, title: "Sunglass 10", price: 29, description:"img eight description" },

    // { img: img11, title: "Cat-Eye", price: 999, description:"Elegant red cat-eye sunglass" },

    // { img: img12, title: "Ray-ban Bold square sunglass", price: 999, description:"Bold square shaped frame with a matte black finish and dark lenses" },

    // // { img: img13, title: "Cat-Eye", price: 999, description:"Elegant trasparent cat-eye sunglass" },

    // { img: img14, title: "Square Sunglass", price: 1299, description:"Luxury-Orange-Square-Rimless-Sunglass" },

    // { img: img15, title: "Square Sunglass", price: 1299, description:"Luxury-lightGreenish-Square-Rimless-Sunglass" },

    // { img: img16, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },

    // { img: img17, title: "Cat-Eye", price: 999, description:"Elegant white cat-eye sunglass" },

    // { img: img18, title: "Cat-Eye", price: 999, description:"Elegant white,red,trasparent cat-eye sunglasses" },

    // { img: img19, title: "Square Sunglass", price: 1299, description:"Luxury-Orange-Square-Rimless-Sunglass" },

    // { img: img20, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },

  ];

  return (
    <>
      <Navbar />
      <div className='herosection'>
        <div className='heroleft'>
          <h1>Grab UpTo <span className='spanele'>50%</span> Off On Selected Sun Glasses</h1>
          <button className='herobutt'>Buy Now</button>
        </div>
        

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


