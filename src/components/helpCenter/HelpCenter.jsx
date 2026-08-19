import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./HelpCenter.module.scss";
import { supportItems } from "../../content/homeContent";
import { premiumEase, revealUp, stagger, viewportOnce } from "../../utilities/motion";

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.helpCenter} id="support" aria-labelledby="support-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.intro}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <span>Support</span>
          <h2 id="support-title">Help that is easy to find.</h2>
          <p>Clear support paths for platform, booking, payment, and record-related issues.</p>
          <motion.div
            className={styles.availability}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: 0.15, ease: premiumEase }}
          >
            <strong>24/7</strong>
            <span>Support access</span>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.accordion}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;
            const panelId = `support-panel-${index}`;
            const buttonId = `support-button-${index}`;

            return (
              <motion.div className={styles.item} key={item.title} variants={revealUp}>
                <button
                  id={buttonId}
                  type="button"
                  className={styles.summary}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <motion.span
                    className={styles.icon}
                    animate={isOpen && !reduceMotion ? { rotate: -4, scale: 1.04 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                  >
                    <Icon />
                  </motion.span>
                  <span>{item.title}</span>
                  <motion.span
                    className={styles.symbol}
                    aria-hidden="true"
                    animate={isOpen && !reduceMotion ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.panel}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.34, ease: premiumEase }}
                    >
                      <p>{item.copy}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HelpCenter;
