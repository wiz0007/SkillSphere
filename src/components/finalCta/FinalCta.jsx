import React from "react";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.scss";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import { fadeUp, viewportOnce } from "../../motion/presentation";

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
          <span>{`{ OPEN PLATFORM }`}</span>
          <span>{`{ START LEARNING }`}</span>
          <span>{`{ JOIN COMMUNITY }`}</span>
        </div>
        <p className={styles.kicker}>Ready To Continue?</p>
        <h2>Enter {BRAND_NAME} and start learning with real mentors.</h2>
        <p className={styles.copy}>
          Explore the full platform to discover skill categories, join the community,
          and connect with the right path for your growth.
        </p>
        <div className={styles.actions}>
          <a href={MAIN_SITE_URL} className={styles.primaryBtn}>Open SkillSphere</a>
          <a href={`${MAIN_SITE_URL}#courses`} className={styles.secondaryBtn}>Browse The Platform</a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCta;
