import { useRef } from "react";
import { motion } from "framer-motion";
import "./HeroBottomCards.css"; 

export default function HeroBottomCards() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };



  const lines = ["Get", "Your", "Package", "Delivered In", "Minutes"];

  return (
    <div className="hero-bottom-wrapper">
      <button onClick={scrollLeft} className="scroll-btn inside-left">←</button>
     <div ref={scrollRef} className="hero-bottom">

      <div
      className="inner-hero-bottom delivery-bg"
      style={{
        backgroundImage: `url('/Delivert.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#b90404",
        justifyContent: "flex-end",
        paddingRight: "2rem",
      }}
    >
      <div>
        {lines.map((line, i) => (
          <motion.h3
            key={i}
        
              className="animated-line"
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              delay: i * 0.5,
              duration: 4,
              repeat: Infinity,
              repeatDelay: lines.length,
              ease: "easeInOut"
            }}
          >
            {line}
          </motion.h3>
        ))}
      </div>
    </div>

        {/* Animated Card with background image */}
        <motion.div
          className="inner-hero-bottom"
          style={{
            backgroundImage: `url('/30Percent.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff"
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

        </motion.div>

        {/* Italic text card */}
        <div 
        className="inner-hero-bottom delivery-bg"
      style={{
        backgroundImage: `url('/Buy3Items.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#b90404",
        justifyContent: "flex-end",
        paddingRight: "2rem",
      }}>
        </div>

        {/* Gradient background animated card */}
      <motion.div
          className="inner-hero-bottom"
          style={{
            backgroundImage: `url('/ClearanceSales.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff"
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

        </motion.div>
   
      </div>
       <button onClick={scrollRight} className="scroll-btn inside-right">→</button>
    </div>
  );
}
