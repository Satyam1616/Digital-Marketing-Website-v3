import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <img
            src={images[currentIndex].image}
            alt={images[currentIndex].alt}
            className={styles.carouselImage}
          />
          {images[currentIndex].caption && (
            <div className={styles.caption}>
              <h3>{images[currentIndex].caption}</h3>
            </div>
          )}
        </div>

        {/* Left and Right Arrows */}
        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
