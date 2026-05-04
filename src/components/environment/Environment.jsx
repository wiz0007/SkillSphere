import React from "react";
import { motion } from "framer-motion";
import styles from "./Environment.module.scss";
import { FaVideo, FaComments, FaUsers, FaHandsHelping } from "react-icons/fa";
import environmentLoop from "../../assets/community-loop.gif";
import { slideLeft, slideRight, softPop, staggerWrap, viewportOnce } from "../../motion/presentation";
import ProductLoop from "../productLoop/ProductLoop";
import ParallaxLayer from "../parallaxLayer/ParallaxLayer";

const Environment = () => {
  return (
    <section className={styles.environment} id="community">
      <ParallaxLayer className={styles.parallaxHaloOne} offset={90} />
      <ParallaxLayer className={styles.parallaxHaloTwo} offset={70} reverse />
      <motion.div
        className={styles.textArea}
        variants={slideLeft}
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
        variants={slideRight}
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

      <motion.div
        className={styles.features}
        variants={staggerWrap}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className={styles.feature} variants={softPop}>
          <FaVideo className={styles.icon} />
          <div>
            <h4>Live Sessions</h4>
            <p>Engage directly with mentors through live interactive classes.</p>
          </div>
        </motion.div>

        <motion.div className={styles.feature} variants={softPop}>
          <FaComments className={styles.icon} />
          <div>
            <h4>Community Chat</h4>
            <p>Join global discussions and share ideas instantly with peers.</p>
          </div>
        </motion.div>

        <motion.div className={styles.feature} variants={softPop}>
          <FaUsers className={styles.icon} />
          <div>
            <h4>Collaborative Groups</h4>
            <p>Form or join study groups, projects, and shared learning spaces.</p>
          </div>
        </motion.div>

        <motion.div className={styles.feature} variants={softPop}>
          <FaHandsHelping className={styles.icon} />
          <div>
            <h4>Mentorship Support</h4>
            <p>Get guided feedback and insights directly from your instructors.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Environment;
