import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Footer.module.scss";
import { BRAND_NAME, MAIN_SITE_URL, SUPPORT_EMAIL } from "../../constants/site";
import logo from "../../assets/skillSphere-mark.svg";
import collegeLogo from "../../assets/collegeLogo.png";
import { premiumEase } from "../../utilities/motion";

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className={styles.footer}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.68, ease: premiumEase }}
    >
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <motion.a whileHover={reduceMotion ? undefined : { x: 3 }} className={styles.brand} href="#home">
            <img src={logo} alt="" />
            <span className={styles.wordmark}><strong>Skill</strong><span>Sphere</span></span>
          </motion.a>
          <p>Learn from people. Share what you know.</p>
        </div>

        <div className={styles.linkRow}>
          <div className={styles.links}>
            <a href="#courses">Courses</a>
            <a href="#community">Community</a>
            <a href="#currency">SkillCoin</a>
            <a href="#team">Creator</a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>Support</a>
            <a href={MAIN_SITE_URL}>Main platform</a>
          </div>

          <div className={styles.academic}>
            <img src={collegeLogo} alt="Govind Ballabh Pant University of Agriculture and Technology logo" loading="lazy" />
            <span>Academic project · GBPUAT, Pantnagar</span>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>© {new Date().getFullYear()} {BRAND_NAME}</span>
          <span>Built for peer-to-peer learning.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
