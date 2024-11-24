import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="SPdigitalMarketing Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
