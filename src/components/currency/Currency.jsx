import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Currency.module.scss";
import { currencySteps } from "../../content/homeContent";
import { premiumEase, revealSoft, revealUp, stagger, viewportOnce } from "../../utilities/motion";

const Currency = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.currencySection} id="currency" aria-labelledby="currency-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <div>
            <span className={styles.eyebrow}>SkillCoin</span>
            <h2 id="currency-title">A clear exchange from booking to payout.</h2>
          </div>
          <p>One wallet keeps the learner and mentor side of a session easy to understand.</p>
        </motion.header>

        <div className={styles.ledger}>
          <motion.div
            className={styles.coinPanel}
            aria-hidden="true"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealSoft}
          >
            <span>SkillCoin</span>
            <motion.strong
              initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.78, ease: premiumEase }}
            >
              SC
            </motion.strong>
            <small>Learning value, kept in one flow.</small>
          </motion.div>

          <motion.div
            className={styles.flowWrap}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.span
              className={styles.flowProgressDesktop}
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.15, delay: 0.12, ease: premiumEase }}
              aria-hidden="true"
            />
            <motion.span
              className={styles.flowProgressMobile}
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.05, delay: 0.12, ease: premiumEase }}
              aria-hidden="true"
            />

            <ol className={styles.flow}>
              {currencySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li className={styles.step} key={step.title} variants={revealUp}>
                    <motion.span
                      className={styles.node}
                      whileHover={reduceMotion ? undefined : { scale: 1.06, y: -3 }}
                      transition={{ duration: 0.24, ease: premiumEase }}
                    >
                      <Icon />
                    </motion.span>
                    <div className={styles.stepCopy}>
                      <span>0{index + 1}</span>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        </div>

        <motion.p
          className={styles.auditNote}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, ease: premiumEase }}
        >
          <span aria-hidden="true" /> Transaction audit records support accountability across the flow.
        </motion.p>
      </div>
    </section>
  );
};

export default Currency;
