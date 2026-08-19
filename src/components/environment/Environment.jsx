import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Environment.module.scss";
import { communityFeatures } from "../../content/homeContent";
import { premiumEase, revealSoft, revealUp, stagger, viewportOnce } from "../../utilities/motion";

const Environment = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.environment} id="community" aria-labelledby="community-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <div>
            <span className={styles.eyebrow}>Community</span>
            <h2 id="community-title">Learn live. Keep the conversation going.</h2>
          </div>
          <p>Sessions, chat, and mentor feedback stay connected around the same learning goal.</p>
        </motion.header>

        <div className={styles.studio}>
          <motion.div
            className={styles.sessionArea}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={revealSoft}
          >
            <div className={styles.sessionBar}>
              <div><span className={styles.liveDot} /> Live session</div>
              <span>Frontend fundamentals · 48 min</span>
            </div>

            <div className={styles.stage}>
              <div className={styles.sharePanel}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span /><span /><span />
                  <strong>skillsphere / lesson.jsx</strong>
                </div>
                <motion.div
                  className={styles.codeCanvas}
                  aria-hidden="true"
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={stagger}
                >
                  {[styles.lineShort, styles.lineLong, styles.lineMid, styles.lineLong, styles.lineShort].map((lineClass, index) => (
                    <motion.span
                      key={`${lineClass}-${index}`}
                      className={lineClass}
                      variants={{
                        hidden: { opacity: 0, scaleX: 0 },
                        visible: {
                          opacity: 1,
                          scaleX: 1,
                          transition: { duration: 0.52, ease: premiumEase },
                        },
                      }}
                    />
                  ))}
                  <motion.div
                    className={styles.codeNote}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: premiumEase } },
                    }}
                  >
                    Mentor is sharing a practical example
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className={styles.peopleRail}
                initial={reduceMotion ? false : { opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: 0.18, ease: premiumEase }}
              >
                <div className={styles.personTile}>
                  <span className={styles.avatar}>AM</span>
                  <div><strong>Mentor</strong><small>Sharing screen</small></div>
                </div>
                <div className={styles.personTile}>
                  <span className={`${styles.avatar} ${styles.learnerAvatar}`}>K</span>
                  <div><strong>Learner</strong><small>In session</small></div>
                </div>
                <motion.div
                  className={styles.messageBubble}
                  initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.42, ease: premiumEase }}
                >
                  Can you explain why this state updates here?
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            className={styles.featureRail}
            aria-label="Community features"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.span className={styles.railLabel} variants={revealUp}>Everything stays connected</motion.span>
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div className={styles.feature} key={feature.title} variants={revealUp}>
                  <motion.span
                    className={styles.featureIcon}
                    whileHover={reduceMotion ? undefined : { y: -3, rotate: -3 }}
                    transition={{ duration: 0.22, ease: premiumEase }}
                  >
                    <Icon />
                  </motion.span>
                  <div>
                    <span className={styles.featureIndex}>0{index + 1}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Environment;
