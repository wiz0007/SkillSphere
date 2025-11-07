import React from "react";
import { motion } from "framer-motion";
import styles from "./Environment.module.scss";
import { FaVideo, FaComments, FaUsers, FaHandsHelping } from "react-icons/fa";
import environment from "../../assets/environment.png"

const Environment = () => {
  return (
    <section className={styles.environment} id="community">
      {/* 🟦 Text Section */}
      <motion.div
        className={styles.textArea}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Interactive Environment for Learners & Mentors</h2>
        <p>
          Our platform brings together a thriving community of mentors and students.
          Experience <strong>real-time learning</strong>, <strong>live discussions</strong>,
          and <strong>collaborative growth</strong> — all in one space built for knowledge sharing.
        </p>
      </motion.div>

      {/* 🟩 Image Section */}
      <motion.div
        className={styles.imageArea}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.imageWrapper}>
          <img
            src={environment}
            alt="Interactive Learning Environment"
          />
          <div className={styles.overlay}>
            <p>Connect. Collaborate. Grow Together.</p>
          </div>
        </div>
      </motion.div>

      {/* 🟨 Features Section */}
      <motion.div
        className={styles.features}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.feature}>
          <FaVideo className={styles.icon} />
          <div>
            <h4>Live Sessions</h4>
            <p>Engage directly with mentors through live interactive classes.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <FaComments className={styles.icon} />
          <div>
            <h4>Community Chat</h4>
            <p>Join global discussions and share ideas instantly with peers.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <FaUsers className={styles.icon} />
          <div>
            <h4>Collaborative Groups</h4>
            <p>Form or join study groups, projects, and shared learning spaces.</p>
          </div>
        </div>

        <div className={styles.feature}>
          <FaHandsHelping className={styles.icon} />
          <div>
            <h4>Mentorship Support</h4>
            <p>Get guided feedback and insights directly from your instructors.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Environment;

