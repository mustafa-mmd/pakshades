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
function Products() {
  return (
    <div>
      <Navbar/>
      <div className='cardcontainer'>
        <Card img={img1}/>
        <Card img={img2}/>
        <Card img={img3}/>
        <Card img={img4}/>
        <Card img={img5}/>
        <Card img={img6}/>
        <Card img={img7}/>
        <Card img={img8}/>
        {/* <Card img={img9}/> */}
        {/* <Card img={img10}/>
        <Card img={img11}/>
        <Card img={img12}/>
        <Card img={img13}/>
        <Card img={img14}/>
        <Card img={img15}/>
        <Card img={img16}/> */}
      </div>
      <Foter/>
    </div>
  )
}

export default Products