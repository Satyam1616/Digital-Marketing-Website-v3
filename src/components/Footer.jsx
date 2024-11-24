import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and About Section */}
        <div className={styles.section}>
          <h2 className={styles.logo}>SPdigitalMarketing</h2>
          <p className={styles.about}>
            We provide top-notch digital marketing solutions to help your business grow and thrive in the digital age.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li>
              <Link to="/services" className={styles.link}>Services</Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>About</Link>
            </li>
            <li>
              <Link to="/portfolio" className={styles.link}>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p>Email: info@spdigitalmarketing.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 SPdigitalMarketing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
