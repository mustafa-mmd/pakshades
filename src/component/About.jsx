import React from 'react'
import Navbar from './Navbar'
import Foter from './Foter'
import "./About.css"
import babarpic from "../assets/babarpic.jpeg"
const About = () => {
  return (
    <>
      <Navbar/>
      <h1 className='abouth1'>About Us :</h1>
<div className='about'>
  <p>I'm Babar Ali,
a computer science undergraduate student.

Pakshades is my online sunglasses store
based in Peshawar.

We sell trendy unisex sunglasses
at affordable prices.

 We are reliable.
 We are efficient.
 We are affordable.
 We care about our customers.
 We prioritize our customers.
 We provide good customer service.
 We are customer-friendly.
 We are always available.
 We are honest.
 We are trustworthy.

Thank you for choosing Pakshades!

Best regards,
Babar Ali
Founder, Pakshades
Peshawar, Pakistan.</p>
 <img src={babarpic} alt='founder picture'/>
</div>
      <Foter/>
    </>
  )
}

export default About