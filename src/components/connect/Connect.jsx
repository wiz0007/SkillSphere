import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import styles from "./Connect.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import { premiumEase, revealUp, stagger, viewportOnce } from "../../utilities/motion";

const Connect = () => {
  const reduceMotion = useReducedMotion();

  const paths = [
    {
      index: "01",
      label: "Learner",
      title: "Find the next skill you want to build.",
      icon: FaGraduationCap,
    },
    {
      index: "02",
      label: "Mentor",
      title: "Turn what you know into useful guidance.",
      icon: FaChalkboardTeacher,
    },
  ];

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
          <h2 id="connect-title">Come to learn. Stay to share.</h2>
        </motion.header>

        <motion.div
          className={styles.paths}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={stagger}
        >
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.a
                href={MAIN_SITE_URL}
                className={styles.path}
                key={path.label}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.66, ease: premiumEase } },
                }}
                whileHover={reduceMotion ? undefined : "hover"}
              >
                <motion.span
                  className={styles.hoverWash}
                  variants={{ hover: { scaleX: 1 } }}
                  transition={{ duration: 0.45, ease: premiumEase }}
                  aria-hidden="true"
                />
                <div className={styles.pathMeta}>
                  <span>{path.index}</span>
                  <motion.span
                    className={styles.icon}
                    variants={{ hover: { rotate: -5, y: -2 } }}
                    transition={{ duration: 0.24, ease: premiumEase }}
                  >
                    <Icon />
                  </motion.span>
                </div>
                <div className={styles.pathCopy}>
                  <span>{path.label}</span>
                  <h3>{path.title}</h3>
                </div>
                <motion.span
                  className={styles.arrow}
                  aria-hidden="true"
                  variants={{ hover: { x: 5, y: -5 } }}
                  transition={{ duration: 0.24, ease: premiumEase }}
                >
                  ↗
                </motion.span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
