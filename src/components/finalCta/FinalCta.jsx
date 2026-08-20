import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./FinalCta.module.scss";
import brandMark from "../../assets/skillSphere-mark.svg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const FinalCta = () => {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { amount: 0.12, margin: "100px 0px" });

  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <motion.div
        ref={panelRef}
        className={styles.panel}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div className={styles.visual} aria-hidden="true">
          <div
            className={`${styles.orbit} ${!reduceMotion && panelInView ? styles.orbitSpin : ""}`}
          >
            <span /><span /><span />
          </div>
          <img src={brandMark} alt="" />
        </div>

        <div className={styles.copy}>
          <span className={styles.eyebrow}>Ready when you are</span>
          <h2 id="final-cta-title">Start learning with someone.</h2>
          <p>Find a skill, meet a mentor, and begin.</p>
          <motion.a
            href={MAIN_SITE_URL}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.22, ease: premiumEase }}
          >
            Enter {BRAND_NAME} <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCta;
