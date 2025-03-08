import React from 'react'
import Navbar from './Navbar'
import Foter from './Foter'
import Card from "./Card"
// import img9 from "../assets/sunglass9.jpg";
// import img10 from "../assets/sunglass10.jpg";
// import img11 from "../assets/sunglass11.jpg";
// import img12 from "../assets/sunglass12.jpg";
// import img13 from "../assets/sunglass13.jpg";
// import img14 from "../assets/sunglass14.jpg";
// import img15 from "../assets/sunglass15.jpg";
// import img16 from "../assets/sunglass16.jpg";
import img1 from "../assets/sunglass1.jpg";
import img2 from "../assets/sunglass2.jpg";
import img3 from "../assets/sunglass3.jpg";
import img4 from "../assets/sunglass4.jpg";
import img5 from "../assets/sunglass5.jpg";
import img6 from "../assets/sunglass6.jpg";
import img7 from "../assets/sunglass7.jpg";
import img8 from "../assets/sunglass8.jpg";
function Products({ addToCart }) {
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
      <Navbar/>
      <div className='cardcontainer'>
        {products.map((product, index) => (
          <Card key={index} img={product.img} title={product.title} price={product.price} addToCart={addToCart} />
        ))}
      </div>
      
      <Foter/>
    </>
  )
}

export default Products