import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <>
    <header>
      <h1>Compare</h1>
      <ul>
        <li>
         <Link to="/">Home</Link>
         <Link to="/compare">Compare:-<span></span></Link>
        </li>
      </ul>
    </header>
    </>
  )
}

export default Header