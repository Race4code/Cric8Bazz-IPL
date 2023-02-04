import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='nav-items'>
        <Link to="/" style={{textDecoration:"none",color:"black"}}><p>Home</p></Link>
        <Link to="statbyyear" style={{textDecoration:"none",color:"black"}}><p>StatByYear</p></Link>      
    </div>
    </div>
  )
}

export default Navbar
