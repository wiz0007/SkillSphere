import React from "react";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.scss";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import { fadeUp, softPop, viewportOnce } from "../../motion/presentation";

const FinalCta = () => {
  return (
    <section className={styles.finalCta}>
      <motion.div
        className={styles.panel}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className={styles.pulseRail}>
          <motion.span animate={{ scaleX: [0.35, 1, 0.45] }} transition={{ duration: 3.2, repeat: Infinity }}></motion.span>
          <motion.span animate={{ scaleX: [0.8, 0.42, 1] }} transition={{ duration: 2.8, repeat: Infinity }}></motion.span>
          <motion.span animate={{ scaleX: [0.5, 0.92, 0.62] }} transition={{ duration: 3.6, repeat: Infinity }}></motion.span>
        </div>
        <p className={styles.kicker}>Ready To Continue?</p>
        <h2>Enter {BRAND_NAME} and start learning with real mentors.</h2>
        <p className={styles.copy}>
          Explore the full platform to discover skill categories, join the community,
          and connect with the right path for your growth.
        </p>
        <motion.div
          className={styles.actions}
          variants={softPop}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <a href={MAIN_SITE_URL} className={styles.primaryBtn}>Open SkillSphere</a>
          <a href={`${MAIN_SITE_URL}#courses`} className={styles.secondaryBtn}>Browse The Platform</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCta;
