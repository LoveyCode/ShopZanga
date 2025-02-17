import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/navProfile.png'


const Navbar = () => {
  return (
    <div className='navbar'>
<img src= {logo} alt="" className='nav-logo'/>
<img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar