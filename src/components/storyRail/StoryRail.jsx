import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./StoryRail.module.scss";

const sections = [
  "Opening",
  "Mission",
  "Gallery",
  "Community",
  "Economy",
  "Support",
  "Team",
  "Join",
];

const StoryRail = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.storyRail} aria-hidden="true">
      <div className={styles.track}></div>
      <motion.div className={styles.fill} style={{ height: fillHeight }}></motion.div>
      <motion.div className={styles.pulse} style={{ top: useTransform(progress, [0, 1], ["0%", "100%"]) }}></motion.div>
      <div className={styles.labels}>
        {sections.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default StoryRail;
