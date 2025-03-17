import React from 'react'
import Navbar from './Navbar'
import Foter from './Foter'
import Card from "./Card"
import img1 from "../assets/sunglass1.jpg";
import img2 from "../assets/sunglass2.jpg";
import img3 from "../assets/sunglass3.jpg";
import img4 from "../assets/sunglass4.jpg";
import img5 from "../assets/sunglass5.jpg";
import img6 from "../assets/sunglass6.jpg";
import img7 from "../assets/sunglass7.jpg";
import img8 from "../assets/sunglass8.jpg";
import img9 from "../assets/sunglass9.jpg";
import img10 from "../assets/sunglass10.jpg";
import img11 from "../assets/sunglass11.jpg";
import img12 from "../assets/sunglass12.jpg";
import img13 from "../assets/sunglass13.jpg";
import img14 from "../assets/sunglass14.jpg";
import img15 from "../assets/sunglass15.jpg";
import img16 from "../assets/sunglass16.jpg";
import img17 from "../assets/sunglass17.jpg"
import img18 from "../assets/sunglass18.jpg"
import img19 from "../assets/sunglass19.jpg"
import img20 from "../assets/sunglass20.jpg"

function Products({ addToCart }) {
  const products = [
      { img: img1, title: "Ray-ban", price: 1100, description:"- Iconic Style & Timeless Elegance" },
      
          { img: img2, title: "Square Sunglass", price: 1299 , description:" Luxury-black-Square-Rimless-Sunglass"},
      
          { img: img3, title: "Square Sunglass", price: 1299, description:"Luxury-Darkgreenish-Square-Rimless-Sunglass" },
      
          { img: img4, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },
      
          { img: img5, title: "Square Sunglass", price: 1299 , description:"Luxury-Square-Rimless-Sunglass"},
      
          { img: img6, title: "Cat-Eye", price: 999 , description:"Elegant white cat-eye sunglass"},
      
          { img: img7, title: "Square Sunglass", price: 1299, description:"Luxury-Square-Rimless-Sunglass" },
      
          { img: img8, title: "Ray-ban Bold square sunglass", price: 999, description:"Bold square shaped frame with a matte black finish and dark lenses" },
      
          { img: img9, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield skycolor sunglasses" },
      
          { img: img10, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },
      
          { img: img11, title: "Cat-Eye", price: 999, description:"Elegant red cat-eye sunglass" },
      
          { img: img12, title: "Ray-ban Bold square sunglass", price: 999, description:"Bold square shaped frame with a matte black finish and dark lenses" },
      
          { img: img13, title: "Cat-Eye", price: 999, description:"Elegant trasparent cat-eye sunglass" },
      
          { img: img14, title: "Square Sunglass", price: 1299, description:"Luxury-Orange-Square-Rimless-Sunglass" },
      
          { img: img15, title: "Square Sunglass", price: 1299, description:"Luxury-lightGreenish-Square-Rimless-Sunglass" },
      
          { img: img16, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },
      
          { img: img17, title: "Cat-Eye", price: 999, description:"Elegant white cat-eye sunglass" },
      
          { img: img18, title: "Cat-Eye", price: 999, description:"Elegant white,red,trasparent cat-eye sunglasses" },
      
          { img: img19, title: "Square Sunglass", price: 1299, description:"Luxury-Orange-Square-Rimless-Sunglass" },
      
          { img: img20, title: "Bold Shield sunglasses", price: 999, description:"Ultra-Modern Shield sunglasses" },
      
    ];
  return (
    <>
      <Navbar/>
      <div className='cardcontainer'>
        {products.map((product, index) => (
          <Card key={index} img={product.img} title={product.title} price={product.price} description={product.description} addToCart={addToCart} />
        ))}
      </div>
      
      <Foter/>
    </>
  )
}

export default Products