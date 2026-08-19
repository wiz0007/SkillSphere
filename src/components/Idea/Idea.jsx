import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Idea.module.scss";
import { ideaCards } from "../../content/homeContent";
import { premiumEase, revealUp, stagger, viewportOnce } from "../../utilities/motion";

const Idea = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.mainIdea} id="idea" aria-labelledby="idea-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.sectionIntro}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <span className={styles.eyebrow}>Why SkillSphere</span>
          <h2 id="idea-title">A learning platform shaped around useful human guidance.</h2>
          <p>Three principles keep the experience focused, continuous, and trustworthy.</p>
        </motion.header>

        <motion.div
          className={styles.principles}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {ideaCards.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={styles.principle}
                key={item.id}
                variants={{
                  hidden: { opacity: 0, x: 42 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.66, ease: premiumEase },
                  },
                }}
                whileHover={reduceMotion ? undefined : { x: 8 }}
                transition={{ duration: 0.28, ease: premiumEase }}
              >
                <div className={styles.meta}>
                  <span className={styles.number}>{item.id}</span>
                  <motion.span
                    className={styles.icon}
                    whileHover={reduceMotion ? undefined : { rotate: 7, scale: 1.06 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                  >
                    <Icon />
                  </motion.span>
                </div>
                <div className={styles.copy}>
                  <span className={styles.label}>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.copy}</p>
                <span className={styles.rowArrow} aria-hidden="true">↗</span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Idea;
