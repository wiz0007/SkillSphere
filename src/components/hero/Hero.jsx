import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroLoop from "../../assets/hero-loop.gif";
import skillSphereMark from "../../assets/skillSphere-mark.svg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import ProductLoop from "../productLoop/ProductLoop";
import ParallaxLayer from "../parallaxLayer/ParallaxLayer";

const heroSignals = [
  "Mentor-led experiences",
  "Presentation-grade onboarding",
  "Community and skill economy",
];

const floatingPanels = [
  {
    className: styles.panelTop,
    title: "Live mentor rooms",
    copy: "Learning sessions, guidance, and real collaboration in motion.",
  },
  {
    className: styles.panelLeft,
    title: "Product-first learning",
    copy: "A platform experience that feels designed, not assembled.",
  },
  {
    className: styles.panelBottom,
    title: "Secure growth loop",
    copy: "Courses, community, and value exchange woven into one journey.",
  },
];

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <ParallaxLayer className={styles.parallaxOrbOne} offset={120} />
      <ParallaxLayer className={styles.parallaxOrbTwo} offset={85} reverse />
      <div className={styles.heroGlow}></div>
      <div className={styles.heroGrid}></div>

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>The future of peer-to-peer learning</span>

          <h1>
            A product presentation for how <span>{BRAND_NAME}</span> transforms
            mentorship into a cinematic experience.
          </h1>

          <p>
            This is not just a course platform. It is a guided stage for learning,
            teaching, collaboration, and trusted value exchange, designed to feel bold
            from the first second.
          </p>

          <div className={styles.ctaButtons}>
            <a href={MAIN_SITE_URL} className={styles.exploreBtn}>Enter SkillSphere</a>
            <a href="#courses" className={styles.teachBtn}>See The Showcase</a>
          </div>

          <div className={styles.signalRow}>
            {heroSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.heroStage}
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          <div className={styles.stageOrbit}></div>
          <div className={styles.stageCore}>
            <div className={styles.brandChip}>
              <img src={skillSphereMark} alt={`${BRAND_NAME} mark`} />
              <span>{BRAND_NAME}</span>
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
                title="A cinematic product layer"
                subtitle="Autoplay-feeling showcase loops designed to make the platform feel alive."
              />
              <div className={styles.previewOverlay}>
                <strong>Experience Layered Learning</strong>
                <p>Mentors, learners, community, and value exchange moving together.</p>
              </div>
            </div>

            {floatingPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                className={`${styles.floatingPanel} ${panel.className}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.12, duration: 0.7 }}
              >
                <span className={styles.panelTag}>Presentation layer</span>
                <h3>{panel.title}</h3>
                <p>{panel.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
