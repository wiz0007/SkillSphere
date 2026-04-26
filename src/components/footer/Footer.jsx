import React from "react";
import styles from "./Footer.module.scss";
import { BRAND_NAME, MAIN_SITE_URL, SUPPORT_EMAIL } from "../../constants/site";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>{BRAND_NAME}</h2>
          <p>
            A peer-to-peer platform empowering learners and mentors to share, grow,
            and succeed - all within a trusted blockchain-protected ecosystem.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href={MAIN_SITE_URL}>Home</a></li>
            <li><a href={MAIN_SITE_URL}>Courses</a></li>
            <li><a href={MAIN_SITE_URL}>Help Center</a></li>
            <li><a href={MAIN_SITE_URL}>About Us</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
          <p>Website: <a href={MAIN_SITE_URL}>{MAIN_SITE_URL}</a></p>
          <p>Use the main platform for sign in, exploration, and community access.</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p>Copyright {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        <p>Crafted with care by the {BRAND_NAME} Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
