import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Idea.module.scss";
import { ideaCards } from "../../content/homeContent";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const Idea = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

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
          <h2 id="idea-title">Guidance that stays with the work.</h2>

          <div className={styles.storyIndex} aria-label="Current principle">
            {ideaCards.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={index === activeIndex ? styles.activeDot : ""}
                onClick={() => document.getElementById(`idea-step-${item.id}`)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" })}
                aria-label={`Go to principle ${index + 1}: ${item.label}`}
              >
                <span>{item.id}</span>
              </button>
            ))}
          </div>

          <div className={styles.activeCaption} aria-live="polite">
            <span>{ideaCards[activeIndex].accent}</span>
            <strong>{ideaCards[activeIndex].label}</strong>
          </div>
        </motion.header>

        <div className={styles.storyPanels}>
          {ideaCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                id={`idea-step-${item.id}`}
                className={styles.storyPanel}
                key={item.id}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.58 }}
                initial={reduceMotion ? false : { opacity: 0.32, y: 28, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.58, ease: premiumEase }}
              >
                <div className={styles.panelTop}>
                  <span className={styles.number}>{item.id}</span>
                  <span className={styles.icon}><Icon /></span>
                </div>

                <div className={styles.panelVisual} aria-hidden="true">
                  <div className={styles.orbitOne} />
                  <div className={styles.orbitTwo} />
                  <span className={styles.visualIcon}><Icon /></span>
                  <span className={styles.visualLabel}>{item.accent}</span>
                </div>

                <div className={styles.panelCopy}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <small>{item.detail}</small>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Idea;
