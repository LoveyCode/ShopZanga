import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png';
import Instagram_icon from '../Assets/Instagram_icon.png';
import Pinterest from '../Assets/Pinterest-logo.png';
import tiktok_icon from '../Assets/tiktok_icon.png';
import X_logo from '../Assets/X_logo.png';
import whatsapp_logo from '../Assets/whatsapp_logo.jpeg';
import Facebook_Logo from '../Assets/Facebook_Logo.png';

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={logo} alt="" />
    </div>
<ul className="footer-links">
    <li>Company</li>
    <li>Product</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={Instagram_icon} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={X_logo} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={whatsapp_logo} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={tiktok_icon} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={Facebook_Logo} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={Pinterest} alt="" />
    </div>
</div>
<div className="footer-copyright">
  <hr/>
  <p>Copyright @ 2024 - All Right Reserved.</p>
</div>
    </div>
  )
}

export default Footer