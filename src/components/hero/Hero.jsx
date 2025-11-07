import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import heroImg from "../../assets/hero-illustration.png"; // replace with your image path

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Your Future with <span>SkillShare</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Learn. Teach. Grow — Join a thriving community of mentors and learners
          sharing knowledge and skills to shape tomorrow.
        </motion.p>

        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className={styles.exploreBtn}>Explore Courses</button>
          <button className={styles.teachBtn}>Become a Mentor</button>
        </motion.div>
      </div>

      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img src={heroImg} alt="Skill Learning" />
      </motion.div>

      <div className={styles.bgAnimation}></div>
    </section>
  );
};

export default Hero;
