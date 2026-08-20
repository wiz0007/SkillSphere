import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import styles from "./Connect.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const paths = [
  {
    id: "learner",
    index: "01",
    label: "Learner",
    title: "Find the next skill you want to build.",
    copy: "Explore practical learning paths, compare mentors, and book help when you need it.",
    icon: FaGraduationCap,
    tags: ["Discover", "Book", "Progress"],
  },
  {
    id: "mentor",
    index: "02",
    label: "Mentor",
    title: "Turn what you know into useful guidance.",
    copy: "Create focused learning experiences, guide sessions, and build trust through useful work.",
    icon: FaChalkboardTeacher,
    tags: ["Teach", "Guide", "Earn"],
  },
];

const Connect = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("learner");

  return (
    <section className={styles.connectSection} id="connect" aria-labelledby="connect-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <span className={styles.eyebrow}>Choose your side</span>
          <h2 id="connect-title">Learn or mentor.</h2>
        </motion.header>

        <div className={styles.paths} data-active={active}>
          {paths.map((path) => {
            const Icon = path.icon;
            const isActive = active === path.id;
            return (
              <motion.a
                href={MAIN_SITE_URL}
                className={`${styles.path} ${isActive ? styles.activePath : ""}`}
                key={path.id}
                onMouseEnter={() => setActive(path.id)}
                onFocus={() => setActive(path.id)}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              >
                <span className={styles.pathGlow} aria-hidden="true" />
                <div className={styles.pathTop}>
                  <span>{path.index}</span>
                  <span className={styles.icon}><Icon /></span>
                </div>

                <div className={styles.pathBody}>
                  <span className={styles.label}>{path.label}</span>
                  <h3>{path.title}</h3>
                  <p>{path.copy}</p>
                </div>

                <div className={styles.pathFooter}>
                  <div className={styles.tags}>{path.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <motion.span
                    className={styles.arrow}
                    animate={isActive && !reduceMotion ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.24, ease: premiumEase }}
                    aria-hidden="true"
                  >
                    ↗
                  </motion.span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Connect;
