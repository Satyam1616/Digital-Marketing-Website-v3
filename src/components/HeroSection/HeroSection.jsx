import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/images/hero-bg.jpg"; // Replace with the path to your background image

function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Empowering Your <span className={styles.highlight}>Digital Growth</span>
        </h1>
        <p className={styles.subtitle}>
          Transform your business with cutting-edge digital marketing solutions.
        </p>
        <a href="#services" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
