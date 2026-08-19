import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./FinalCta.module.scss";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const FinalCta = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <motion.div
        className={styles.panel}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <span className={styles.eyebrow}>Ready when you are</span>
        <div className={styles.contentRow}>
          <h2 id="final-cta-title">Start with one skill. Build from there.</h2>
          <motion.a
            href={MAIN_SITE_URL}
            whileHover={reduceMotion ? undefined : { x: 5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.24, ease: premiumEase }}
          >
            Enter {BRAND_NAME} <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
        <motion.div
          className={styles.accentLine}
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, delay: 0.18, ease: premiumEase }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
};

export default FinalCta;
