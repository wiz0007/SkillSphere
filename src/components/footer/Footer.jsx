import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Upper Footer: Brand & Quick Links */}
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>Skilora</h2>
          <p>
            A peer-to-peer platform empowering learners and mentors to share, grow,
            and succeed — all within a trusted blockchain-protected ecosystem.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:support@skillshare.com">support@skillshare.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <div className={styles.socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className={styles.divider}></div>

      {/* Bottom Footer: Copyright */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} SkillShare. All rights reserved.</p>
        <p>Crafted with ❤️ by the SkillShare Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
