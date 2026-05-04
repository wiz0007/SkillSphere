import React from "react";
import { motion } from "framer-motion";
import styles from "./ProductLoop.module.scss";
import skillSphereMark from "../../assets/skillSphere-mark.svg";

const loopBadges = {
  hero: ["Mentor Match", "Live Flow", "SkillCoin"],
  community: ["Rooms", "Group Sync", "Mentor Signals"],
};

const ProductLoop = ({ image, variant = "hero", title, subtitle }) => {
  const badges = loopBadges[variant] ?? loopBadges.hero;

  return (
    <div className={`${styles.loopFrame} ${styles[variant]}`}>
      <div className={styles.mediaLayer}>
        <img src={image} alt={title} />
        <div className={styles.mediaTint}></div>
        <div className={styles.scanline}></div>
      </div>

      <motion.div
        className={styles.interfaceCard}
        animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.cardHeader}>
          <img src={skillSphereMark} alt="SkillSphere mark" />
          <span>SkillSphere Live</span>
        </div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <div className={styles.metricBars}>
          <motion.span animate={{ scaleX: [0.35, 1, 0.55] }} transition={{ duration: 3.4, repeat: Infinity }}></motion.span>
          <motion.span animate={{ scaleX: [0.75, 0.42, 1] }} transition={{ duration: 2.8, repeat: Infinity }}></motion.span>
          <motion.span animate={{ scaleX: [0.5, 0.92, 0.68] }} transition={{ duration: 3.1, repeat: Infinity }}></motion.span>
        </div>
      </motion.div>

      <motion.div
        className={styles.floatingStrip}
        animate={{ x: ["-12%", "12%", "-12%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </motion.div>

      <div className={styles.hudGrid}>
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{ opacity: [0.18, 0.9, 0.18], scaleY: [0.5, 1, 0.65] }}
            transition={{ duration: 1.8 + index * 0.05, repeat: Infinity, ease: "easeInOut" }}
          ></motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProductLoop;
