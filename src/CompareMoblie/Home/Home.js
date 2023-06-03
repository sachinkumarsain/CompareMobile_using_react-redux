import React from 'react'
import image1 from "../../images/610pghkO81L._SX679_-removebg-preview.png"
import image2 from "../../images/61bM8Mojf6L._SX679_-removebg-preview.png"
import image3 from "../../images/61lKQWyMdDL._SX679_-removebg-preview.png"
import image4 from "../../images/71J8tz0UeJL._SX679_-removebg-preview.png"
import image5 from "../../images/71Vd1+ZnY-L._SX679_-removebg-preview.png"
import image6 from "../../images/71to9xkUHrL._SX679_-removebg-preview.png"
import "./Home.css"

function Home() {
  return (
   <>
   <section className='sectionHome'>
      <div className='mobileDetails'>
        <img src={image2}></img>
        <h1>Samsung</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
        <img src={image4}></img>
        <h1>Samsung</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
        <img src={image5}></img>
        <h1>Samsung</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
        <img src={image1}></img>
        <h1>Apple</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
        <img src={image3}></img>
        <h1>Apple</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
        <img src={image6}></img>
        <h1>Google</h1>
        <h2></h2>
        <a href=''>Add To Compare</a>
      </div>
   </section>
   </>
  )
}

export default Home