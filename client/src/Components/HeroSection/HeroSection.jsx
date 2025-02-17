import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import new_arrival_right_btn from '../Assets/new_arrival_right_btn.png';






function HeroSection () {
  // const [menu, setMenu] = useState("shop")


  //   const settings = {
  //       infinite: true,
  //       dots: true,
  //       speed:50,
  //       slidesToShow: 1,
  //       autoplay: true,
  //       autoplaySpeed: 3000,
  //       slidesToScroll: 1,
  //     };
    


  return (
    <div className="hero">
    <div className="hero-left">
    <div className='side-navbar'>
    <ul className="navbar-container">
    <li><Link to='/'>Shop</Link> </li>
      <li> <Link to='/men'> Men</Link> </li>
      <li><Link to='/women'>Women</Link> </li>
    <li><Link to='/kids'>Kids</Link></li>
    </ul>
    </div>
    <div className="hero-text">
      <h4> WELCOME TO ZANGA SHOP </h4>
      <div className="hero-text-intro">
      <h1>Trendy <br /> collections <br />for everyone </h1>
      <p>Modern, affordable fashion for every occasion. <br />Discover your perfect look today!</p>
      </div>
      <button>New Arrivals <img className='btn-icon' src={new_arrival_right_btn} alt="" /></button>
      </div>
    </div>

<div className="hero-right">

<div className="hero-middle-image">
  <div className="image-one"></div>
  <div className="image-two"></div> 
  </div>
  
  <div className="hero-right-image">
  <div className="image-three"></div>
  </div>
</div>

    </div>
  )
}


export default HeroSection;


   /* <div className='hero_container'>
    <div className='side-navbar'>
    <ul className="list_container">
    <li><Link to='/'>Shop</Link> </li>
    <li><Link to='/men' >Men</Link> </li>
    <li><Link to='/women' >Women  </Link></li>
    <li><Link to='/kids' >Kids  </Link></li>
    </ul>
    </div> */



/* 
     <div className='advert_container'>
    <Slider {...settings}>

     
    <div className='sliding'>
    <img src={zangaAnimination4}  alt="" />
    </div> 
 
    <div className='sliding'>
    <img src={zangaAnimination3} alt="" />
    </div>
   <div className='sliding'>
    <img src={advert1} alt="" />
      </div>
      <div className='sliding'>
      <img src={advert2} alt="" />
      </div>
      <div className='sliding'>
     <img src={advert3} alt="" />
</div>

</Slider>

    </div>

<div className="best_deals_container">
    <ul className="best_deals_list">
    <li>CALL TO ORDER</li>
    <li>Sell on Zanga</li>
    <li>Best Deals</li>
    </ul>
    </div>
    </div>  */