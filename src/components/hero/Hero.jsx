import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroLoop from "../../assets/hero-loop.gif";
import skillSphereMark from "../../assets/skillSphere-mark.svg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import ProductLoop from "../productLoop/ProductLoop";

const heroSignals = [
  "{ MENTOR ROOMS }",
  "{ SKILL CATEGORIES }",
  "{ LIVE COMMUNITY }",
  "{ VALUE EXCHANGE }",
  "{ FINAL YEAR PROJECT }",
];

const proofCards = [
  {
    title: "Rapid Learning",
    copy: "Mentor-led paths, community support, and guided skill discovery.",
  },
  {
    title: "Product Feel",
    copy: "The intro behaves like a reveal, not a static college project page.",
  },
  {
    title: "Built To Scale",
    copy: "A focused bridge into the main SkillSphere platform experience.",
  },
];

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.noiseLayer}></div>
      <div className={styles.foldedBackdrop}>
        <span className={styles.foldOne}></span>
        <span className={styles.foldTwo}></span>
        <span className={styles.foldThree}></span>
      </div>

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>Peer-to-peer learning platform</span>

          <h1>{BRAND_NAME}</h1>

          <p>
            A cinematic intro for a platform where learners discover skills,
            connect with mentors, and move into the main product with confidence.
          </p>

          <div className={styles.ctaButtons}>
            <a href={MAIN_SITE_URL} className={styles.exploreBtn}>Enter SkillSphere</a>
            <a href="#courses" className={styles.teachBtn}>View Showcase</a>
          </div>

          <div className={styles.proofStrip}>
            {proofCards.map((card) => (
              <article key={card.title}>
                <span>{card.title}</span>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.heroStage}
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          <div className={styles.stageCore}>
            <div className={styles.brandChip}>
              <img src={skillSphereMark} alt={`${BRAND_NAME} mark`} />
              <span>skillsphere.space</span>
            </div>

            <div className={styles.previewFrame}>
              <div className={styles.previewHeader}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ProductLoop
                image={heroLoop}
                variant="hero"
                title="Live product preview"
                subtitle="Mentor rooms, category discovery, and platform entry in motion."
              />
              <div className={styles.previewOverlay}>
                <strong>Open The Platform</strong>
                <p>Move from the intro into the full SkillSphere experience.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.marqueeStack} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...heroSignals, ...heroSignals].map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}</span>
          ))}
        </div>
        <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
          {[...heroSignals].reverse().concat([...heroSignals].reverse()).map((signal, index) => (
            <span key={`${signal}-reverse-${index}`}>{signal}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
