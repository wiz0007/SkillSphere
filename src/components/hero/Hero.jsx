import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroPoster from "../../assets/hero-learning-poster.jpg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import useTypewriter from "../../hooks/useTypewriter";
import { premiumEase, stagger } from "../../utilities/motion";

// Pexels — Kampus Production, "Teacher with Students in a Library".
const HERO_VIDEO_URL = "https://www.pexels.com/download/video/5940173/";

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { value, reduceMotion } = useTypewriter("Learn from people who know.", 56);
  const shouldReduceMotion = prefersReducedMotion || reduceMotion;

  // Stop video decoding/compositing as soon as the hero is outside the viewport.
  // This frees GPU/main-thread budget for the pinned sections below.
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero || shouldReduceMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();
          playPromise?.catch?.(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.08, rootMargin: "0px" },
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldReduceMotion]);

  return (
    <section ref={heroRef} className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.mediaLayer} aria-hidden="true">
        {!shouldReduceMotion && (
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        )}
        <div className={styles.posterFallback} style={{ backgroundImage: `url(${heroPoster})` }} />
      </div>

      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.edgeGlow} aria-hidden="true" />

      <div className={styles.heroInner}>
        <motion.div
          className={styles.content}
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            className={styles.eyebrow}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: premiumEase } },
            }}
          >
            Peer-to-peer skill learning
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: premiumEase } },
            }}
          >
            {value}
            {!shouldReduceMotion && <span className={styles.cursor} aria-hidden="true" />}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: premiumEase } },
            }}
          >
            Find mentors, join live sessions, and turn practical guidance into visible progress.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: premiumEase } },
            }}
          >
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={MAIN_SITE_URL}
              className={styles.primaryAction}
            >
              Enter {BRAND_NAME}
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              href="#courses"
              className={styles.textAction}
            >
              Explore skills <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.signal}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.62, duration: 0.38, ease: premiumEase }}
        aria-hidden="true"
      >
        <span className={styles.signalDot} />
        <div>
          <strong>Guidance that stays connected</strong>
          <span>Live sessions · community · SkillCoin</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
