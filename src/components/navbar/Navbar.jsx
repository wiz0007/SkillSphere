import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/Logo.png";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href={MAIN_SITE_URL} className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt={`${BRAND_NAME} logo`} />
          <h1>{BRAND_NAME}</h1>
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#community" onClick={closeMenu}>Community</a></li>
          <li><a href="#currency" onClick={closeMenu}>Currency</a></li>
          <li><a href="#connect" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className={styles.navButtons}>
          <a href={MAIN_SITE_URL} className={styles.loginBtn}>Login</a>
          <a href={MAIN_SITE_URL} className={styles.signupBtn}>Join Now</a>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
