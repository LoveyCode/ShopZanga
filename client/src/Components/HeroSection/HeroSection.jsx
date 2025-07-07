import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import HeroBottomCards from "../HerobottomCards/HeroBottomCards";
import { FaPhoneAlt, FaHandshake, FaStore, FaShippingFast } from "react-icons/fa";




const sliderSettings = {
  dots: true,
  customPaging: (i) => (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#b90404",
      }}
    />
  ),
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "ease-in-out",
};

const bannerImages = [
   "/banner.png",
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
];

const cardLogos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
];

const mobileBannerImages = [
  "/smallBanner1.png",
 "/smallBanner2.png",
 "/smallBanner3.png",
  "/smallBanner4.png",
   "/smallBanner5.png",
];


const CardSliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,                 // controls transition speed
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,                 // 🔥 key for smooth glow transition
  cssEase: "ease-in-out"
};




export default function HeroSection() {
  return (
    <div className="hero-wrapper">
     <div className="hero-top">
  <div className="hero-slider">
    <Slider {...sliderSettings}>
      {bannerImages.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`banner-${i}`} className="banner-img" />
        </div>
      ))}
    </Slider>

    {/* Custom horizontal scroll slider for small screens */}
 <div className="hero-slider-alt">
  {mobileBannerImages.map((src, i) => (
    <img key={i} src={src} alt={`mobile-banner-${i}`} className="banner-alt-img" />
  ))}
</div>
  </div>

  <div className="hero-right-cards">
    {/* Call to Order card */}
    <div className="hero-side-card">
      <div className="side-card-content">
        <p><FaPhoneAlt className="side-icon" /> Call to Order</p>
        <p><FaHandshake className="side-icon" /> Partner with Us</p>
        <p><FaStore className="side-icon" /> Sell on Zanga</p>
        <p><FaShippingFast className="side-icon" /> Send Your Packages</p>
      </div>
    </div>

    {/* Logo slider */}
    <div className="hero-side-card2">
      <div className="side-card-images">
        <div className="logo-slider-container">
          <Slider {...CardSliderSettings}>
            {cardLogos.map((logo, i) => (
              <div key={i} className="logo-slide">
                <img src={logo} alt={`logo-${i}`} className="logo-img" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
</div>

<HeroBottomCards />
    </div>
  );
}
