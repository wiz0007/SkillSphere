import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/Logo.png"; // replace with your actual logo path

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div onClick={() =>navigate("/")} className={styles.logo}>
          <img src={logo} alt="SkillShare" />
          <h1>SkilSphere</h1>
        </div>

        {/* Menu */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#currency">Currency</a></li>  
          <li><a href="#connect">Contact</a></li>
        </ul>

        {/* CTA */}
        <div className={styles.navButtons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Join Now</button>
        </div>

        {/* Mobile Toggle */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
