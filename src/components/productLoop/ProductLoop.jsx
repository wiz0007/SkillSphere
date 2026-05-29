import React from "react";
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

      <div className={styles.interfaceCard}>
        <div className={styles.cardHeader}>
          <img src={skillSphereMark} alt="SkillSphere mark" />
          <span>SkillSphere Live</span>
        </div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <div className={styles.metricBars}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.floatingStrip}>
        {badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>

      <div className={styles.hudGrid}>
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default ProductLoop;
