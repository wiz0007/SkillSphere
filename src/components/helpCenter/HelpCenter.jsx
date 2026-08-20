import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./HelpCenter.module.scss";
import { supportItems } from "../../content/homeContent";
import { MAIN_SITE_URL } from "../../constants/site";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = supportItems[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className={styles.helpCenter} id="support" aria-labelledby="support-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <div>
            <span className={styles.eyebrow}>Support</span>
            <h2 id="support-title">Help, with the right context.</h2>
          </div>
        </motion.header>

        <div className={styles.supportDesk}>
          <div className={styles.routeList} aria-label="Support routes">
            {supportItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  type="button"
                  aria-pressed={isActive}
                  className={`${styles.route} ${isActive ? styles.activeRoute : ""}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  key={item.title}
                >
                  <span className={styles.routeIndex}>0{index + 1}</span>
                  <span className={styles.routeIcon}><Icon /></span>
                  <span className={styles.routeCopy}>
                    <strong>{item.title}</strong>
                    <small>{item.response}</small>
                  </span>
                  <span className={styles.routeArrow} aria-hidden="true">↗</span>
                </button>
              );
            })}
          </div>

          <motion.div
            className={styles.detailPanel}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: premiumEase }}
          >
            <div className={styles.detailTop}>
              <span>Support workspace</span>
              <span className={styles.online}><i /> Available</span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className={styles.detailBody}
                key={active.title}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -14 }}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: premiumEase }}
              >
                <div className={styles.detailIcon}><ActiveIcon /></div>
                <span className={styles.detailLabel}>{active.title}</span>
                <h3>{active.response}</h3>
                <p>{active.copy}</p>

                <div className={styles.contextGrid}>
                  <div><span>01</span><strong>Bring context</strong><small>Booking, account, or transaction details.</small></div>
                  <div><span>02</span><strong>Keep a record</strong><small>Support stays tied to the relevant activity.</small></div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.detailFooter}>
              <span>Need to open the platform?</span>
              <motion.a
                href={MAIN_SITE_URL}
                whileHover={reduceMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.22, ease: premiumEase }}
              >
                Go to SkillSphere <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
