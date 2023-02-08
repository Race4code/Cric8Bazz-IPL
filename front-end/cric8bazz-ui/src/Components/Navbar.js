import React from 'react'
import './Navbar.css'
import logo from '../Assets/web_logo.png'
import { Link,NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to={"/"}><img src={logo} alt="logo" className='web-logo'/></Link>
      </div>
      <div className='nav-items'>
        <NavLink 
          to="/" 
          style={({isActive})=>({
            color:isActive?"black":"white",
            textDecoration:"none",
            padding:isActive?"5px 10px":"0px",
            fontWeight:isActive?"900":"500",
            background: isActive && "linear-gradient(156deg, rgba(208,203,203,1) 0%, rgba(206,199,199,1) 41%, rgba(255,255,255,1) 59%, rgba(77,77,77,1) 100%)",
          })}
          ><p>Home</p></NavLink>
        <NavLink to="statbyyear" 
        style={({isActive})=>({
          color:isActive?"black":"white",
          textDecoration:"none",
          padding:isActive?"5px 10px":"0px",
          fontWeight:isActive?"900":"500",
          background: isActive && "linear-gradient(156deg, rgba(208,203,203,1) 0%, rgba(206,199,199,1) 41%, rgba(255,255,255,1) 59%, rgba(77,77,77,1) 100%)",

        })}><p>StatByYear</p></NavLink>      
    </div>
    </div>
  )
}

export default Navbar
