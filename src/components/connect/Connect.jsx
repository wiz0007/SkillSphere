import React from "react";
import { motion } from "framer-motion";
import styles from "./Connect.module.scss";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { MAIN_SITE_URL } from "../../constants/site";
import { fadeUp, slideLeft, slideRight, viewportOnce } from "../../motion/presentation";

const Connect = () => {
  return (
    <section className={styles.connectSection} id="connect">
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2>Join Our Skill-Sharing Community</h2>
        <p>
          Whether you're a passionate <strong>mentor</strong> ready to teach or an eager{" "}
          <strong>student</strong> looking to learn, connect now and be part of our
          peer-to-peer learning revolution.
        </p>
      </motion.div>

      <div className={styles.connectorBeam}>
        <motion.span animate={{ x: ["-10%", "110%"] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}></motion.span>
      </div>

      <div className={styles.cards}>
        <motion.div
          className={styles.card}
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <FaChalkboardTeacher className={styles.icon} />
          <h3>For Mentors</h3>
          <p>
            Create courses, share your expertise, and earn by teaching students from across
            the world.
          </p>
          <div className={styles.btnGroup}>
            <a href={MAIN_SITE_URL} className={styles.joinBtn}>
              Join as Mentor
            </a>
            <a href={MAIN_SITE_URL} className={styles.loginBtn}>
              Login
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <FaUserGraduate className={styles.icon} />
          <h3>For Students</h3>
          <p>
            Explore courses, interact with mentors, and learn practical skills that elevate
            your career and creativity.
          </p>
          <div className={styles.btnGroup}>
            <a href={MAIN_SITE_URL} className={styles.joinBtn}>
              Join as Student
            </a>
            <a href={MAIN_SITE_URL} className={styles.loginBtn}>
              Login
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
