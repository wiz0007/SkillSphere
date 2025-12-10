import React from "react";
import { motion } from "framer-motion";
import styles from "./Idea.module.scss";
import { FaChalkboardTeacher, FaUsers, FaExchangeAlt } from "react-icons/fa";

const Idea = () => {
  return (
    <section className={styles.mainIdea}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Mission — Empower Through Peer-to-Peer Skill Sharing
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        SkilSphere is a <strong>peer-to-peer (P2P)</strong> learning ecosystem where{" "}
        <strong>freelancer instructors</strong> can share their expertise and{" "}
        <strong>students</strong> can directly enroll in real-world, skill-focused courses.
        It’s learning and teaching reimagined — by the people, for the people.
      </motion.p>

      <div className={styles.cards}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaChalkboardTeacher className={styles.icon} />
          <h3>For Instructors</h3>
          <p>
            Share your skills, create courses, and grow your personal brand. Your knowledge
            deserves an audience — monetize your expertise effortlessly.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaUsers className={styles.icon} />
          <h3>For Learners</h3>
          <p>
            Discover unique courses taught by professionals from around the world.
            Learn practical skills that truly matter for your career and creativity.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaExchangeAlt className={styles.icon} />
          <h3>For the Community</h3>
          <p>
            Connect, collaborate, and share. SkilSphere fosters a growing community where
            everyone learns, teaches, and inspires one another.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Idea;
