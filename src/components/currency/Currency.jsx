import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./Currency.module.scss";
import { currencySteps } from "../../content/homeContent";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const Currency = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const walletRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const walletInView = useInView(walletRef, { amount: 0.12, margin: "120px 0px" });
  const active = currencySteps[activeIndex];
  const ActiveIcon = active.icon;

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
            <h2 id="currency-title">SkillCoin, without the friction.</h2>
          </div>
        </motion.header>

        <div className={styles.walletExperience}>
          <motion.div
            ref={walletRef}
            className={styles.walletStage}
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: premiumEase }}
          >
            <div className={styles.walletGlow} aria-hidden="true" />
            <div className={styles.walletTop}>
              <div>
                <span>SkillCoin wallet</span>
                <strong>{active.balance}</strong>
              </div>
              <div className={styles.coinMark} aria-hidden="true">SC</div>
            </div>

            <div className={styles.walletOrbit} aria-hidden="true">
              <span /><span /><span />
              <i className={!reduceMotion && walletInView ? styles.orbitSpin : ""} />
              <div className={styles.orbitCore}><ActiveIcon /></div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.title}
                className={styles.receipt}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: premiumEase }}
              >
                <span>{active.status}</span>
                <strong>{active.amount}</strong>
                <small>{active.copy}</small>
              </motion.div>
            </AnimatePresence>

            <div className={styles.walletFooter}>
              <span>Protected session flow</span>
              <span>Audit-aware</span>
            </div>
          </motion.div>

          <div className={styles.stepRail} aria-label="SkillCoin flow">
            {currencySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={step.title}
                  type="button"
                  aria-pressed={isActive}
                  className={`${styles.stepButton} ${isActive ? styles.activeStep : ""}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                  transition={{ duration: 0.22, ease: premiumEase }}
                >
                  <span className={styles.stepIndex}>0{index + 1}</span>
                  <span className={styles.stepIcon}><Icon /></span>
                  <span className={styles.stepCopy}>
                    <small>{step.kicker}</small>
                    <strong>{step.title}</strong>
                    <span>{step.copy}</span>
                  </span>
                  <span className={styles.stepArrow} aria-hidden="true">→</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className={styles.trustStrip}>
          <span><i /> Booking value stays visible</span>
          <span><i /> Payout follows completion</span>
          <span><i /> Transaction records support accountability</span>
        </div>
      </div>
    </section>
  );
};

export default Currency;
