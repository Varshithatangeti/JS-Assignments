`16.Write a react component that implements a carousel`
import React, { useState } from 'react';
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Previous</button>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};
export default Carousel;
