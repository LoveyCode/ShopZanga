// SideNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="side-navbar">
      <ul className="navbar-container">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
