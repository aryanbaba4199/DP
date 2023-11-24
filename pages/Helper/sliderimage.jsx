import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://i.pinimg.com/564x/2c/1d/76/2c1d762204a185fe69e48aebff654f20.jpg",
    text: "Image 1",
  },
  {
    src: "https://i.pinimg.com/564x/f0/71/82/f07182bdff6d9ff89c6854174c82340e.jpg",
    text: "Image 2",
  },
  {
    src: "https://i.pinimg.com/564x/17/7a/68/177a68bc41b2a0a4c3b1a86e9f601084.jpg",
    text: "Image 3",
  },
  {
    src: "https://i.pinimg.com/564x/b9/8d/9a/b98d9a27694998295ebf4c81ce1deb54.jpg",
    text: "Image 4",
  },
];

export default function SliderImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const imageStyle = {
    width: "100%", 
    height: "90%", 
    opacity: 0, 
    transition: "opacity 1s ease-in-out", 
    position: "absolute", 
  };
  const spanStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "5px",
    position: "absolute",
    bottom: "10px",
    left: "10px",
  };

  return (
    <div className="imgslider-box">
      {images.map((item, index) => (
        <div key={index}>
          
        <img src={item.src} alt={`slider${index + 1}`} className="slider-img"
        style={{
          ...imageStyle,
          opacity: index === currentIndex ? 1 : 0,
        }}
        />
      </div>
      
        
      ))}
    </div>
  );
}
