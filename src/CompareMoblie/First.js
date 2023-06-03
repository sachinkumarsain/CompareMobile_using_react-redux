import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header/Header'
import Compare from './Compare/Compare'

function First() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default First