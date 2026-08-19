import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Hero.module.scss";
import heroPoster from "../../assets/hero-learning-poster.jpg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import useTypewriter from "../../hooks/useTypewriter";
import { premiumEase, stagger } from "../../utilities/motion";

// Free-to-use Pexels footage by cottonbro studio:
// https://www.pexels.com/video/people-coding-on-computer-6804109/
const HERO_VIDEO_URL = "https://www.pexels.com/download/video/6804109/";

const Hero = () => {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { value, reduceMotion } = useTypewriter("Learn from people who know.", 58);
  const shouldReduceMotion = prefersReducedMotion || reduceMotion;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "9%"]), {
    stiffness: 90,
    damping: 24,
  });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.015, 1.075]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.5]);

  return (
    <section ref={heroRef} className={styles.hero} id="home" aria-labelledby="hero-title">
      <motion.div
        className={styles.mediaLayer}
        style={shouldReduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
        aria-hidden="true"
      >
        {!shouldReduceMotion && (
          <video
            className={styles.backgroundVideo}
            src={HERO_VIDEO_URL}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
        <div className={styles.posterFallback} style={{ backgroundImage: `url(${heroPoster})` }} />
      </motion.div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <motion.div
        className={styles.heroInner}
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className={styles.content}
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            className={styles.eyebrow}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: premiumEase } },
            }}
          >
            Peer-to-peer skill learning
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: premiumEase } },
            }}
          >
            {value}
            {!shouldReduceMotion && <span className={styles.cursor} aria-hidden="true" />}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: premiumEase } },
            }}
          >
            Find mentors, join live sessions, and build practical skills inside one connected learning community.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: premiumEase } },
            }}
          >
            <motion.a whileHover={shouldReduceMotion ? undefined : { y: -2 }} href={MAIN_SITE_URL} className={styles.primaryAction}>
              Enter {BRAND_NAME}
            </motion.a>
            <motion.a whileHover={shouldReduceMotion ? undefined : { x: 4 }} href="#courses" className={styles.textAction}>
              Explore courses <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.heroFooter}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.15, duration: 0.55, ease: premiumEase }}
        aria-hidden="true"
      >
        <span>Live guidance</span>
        <span>Community learning</span>
        <span>SkillCoin</span>
      </motion.div>
    </section>
  );
};

export default Hero;
