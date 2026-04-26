import React from "react";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.scss";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";

const FinalCta = () => {
  return (
    <section className={styles.finalCta}>
      <motion.div
        className={styles.panel}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
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
