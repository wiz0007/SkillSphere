import React from "react";
import { motion } from "framer-motion";
import styles from "./Environment.module.scss";
import { FaVideo, FaComments, FaUsers, FaHandsHelping } from "react-icons/fa";
import environmentLoop from "../../assets/community-loop.gif";
import { fadeUp, viewportOnce } from "../../motion/presentation";
import ProductLoop from "../productLoop/ProductLoop";

const Environment = () => {
  return (
    <section className={styles.environment} id="community">
      <motion.div
        className={styles.textArea}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2>Interactive Environment for Learners & Mentors</h2>
        <p>
          Our platform brings together a thriving community of mentors and students.
          Experience <strong>real-time learning</strong>, <strong>live discussions</strong>,
          and <strong>collaborative growth</strong> - all in one space built for knowledge sharing.
        </p>
      </motion.div>

      <motion.div
        className={styles.imageArea}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className={styles.imageWrapper}>
          <ProductLoop
            image={environmentLoop}
            variant="community"
            title="Community spaces in motion"
            subtitle="Rooms, collaboration signals, and live discussion energy running like an ambient product demo."
          />
          <div className={styles.overlay}>
            <p>Connect. Collaborate. Grow Together.</p>
          </div>
        </div>
      </motion.div>

      <div className={styles.features}>
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
      </div>
    </section>
  );
};

export default Environment;
