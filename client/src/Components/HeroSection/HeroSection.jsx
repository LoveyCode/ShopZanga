import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css';
import { Link } from 'react-router-dom';
import new_arrival_right_btn from '../Assets/new_arrival_right_btn.png';




const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: "ease-in-out",
}


const bannerImages = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png"
];


function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-left">
        <nav className="side-navbar">
          <ul className="navbar-container">
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/men'>Men</Link></li>
            <li><Link to='/women'>Women</Link></li>
            <li><Link to='/kids'>Kids</Link></li>
          </ul>
        </nav>


<div className="hero-banner-container">
  <Slider {...sliderSettings} className="desktop-slider">
    {bannerImages.map((src, i) => (
      <div key={i} className="banner-slide">
        <img src={src} 
        alt={`banner-${i}`} 
        className="banner-img" />
      </div>
    ))}
  </Slider>

  {/* <div className="mobile-card-slider">
    {bannerImages.map((src, i) => (
      <div key={i} className="mobile-card">
        <img src={src} alt={`card-${i}`} className="mobile-card-img" />
      </div>
    ))}
  </div> */}
</div>

          <button>
            New Arrivals
            <img className="btn-icon" src={new_arrival_right_btn} alt="right arrow" />
          </button>
       
      </div>

      {/* <div className="hero-right">
        <div className="hero-middle-image">
          <div className="image-one"></div>
          <div className="image-two"></div>
        </div>
        <div className="hero-right-image">
          <div className="image-three"></div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
