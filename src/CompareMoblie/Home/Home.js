import React from 'react'
import image1 from "../../images/610pghkO81L._SX679_-removebg-preview.png"
import image2 from "../../images/61bM8Mojf6L._SX679_-removebg-preview.png"
import image3 from "../../images/61lKQWyMdDL._SX679_-removebg-preview.png"
import image4 from "../../images/71J8tz0UeJL._SX679_-removebg-preview.png"
import image5 from "../../images/71Vd1+ZnY-L._SX679_-removebg-preview.png"
import image6 from "../../images/71to9xkUHrL._SX679_-removebg-preview.png"
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const dispatch =useDispatch();
  const data =useSelector((state)=>{
    return state.compare
  })
  // function handleCompare (e){
  //   e.preventDefault()
    

  // }
  function exitIncart(){
    // let exit=false;
    // if()
  }
  return (
   <>
   <section className='sectionHome'>
      <div className='mobileDetails'>
        <Link to="/image"><img src={image2}></img></Link>
        <h1>Samsung</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
        {/* {
          (exitIncart())?<a href=''>Added To Compare</a>:<a onClick={handleCompare()} href=''>Add To Comapare</a>
        } */}
      </div>
      <div className='mobileDetails'>
      <Link to="/image"><img src={image4}></img></Link>
        <h1>Samsung</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
      <Link to="/image"><img src={image5}></img></Link>
        <h1>Samsung</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
      <Link to="/image"><img src={image1}></img></Link>
        <h1>Apple</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
      <Link to="/image"><img src={image3}></img></Link>
        <h1>Apple</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
      </div>
      <div className='mobileDetails'>
      <Link to="/image"><img src={image6}></img></Link>
        <h1>Google</h1>
        <h2></h2>
        <a className='anchore' href=''>Add To Compare</a>
      </div>
   </section>
   </>
  )
}

export default Home