import React from "react";
import { motion } from "framer-motion";
import styles from "./HelpCenter.module.scss";
import { FaHeadset, FaGavel, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { curtainReveal, fadeUp, slideLeft, slideRight, staggerWrap, viewportOnce } from "../../motion/presentation";

const HelpCenter = () => {
  return (
    <section className={styles.helpCenter}>
      {/* Header Section */}
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2>24/7 Help Center & Dispute Resolution</h2>
        <p>
          We ensure a <strong>safe and fair environment</strong> for both students and mentors.
          Our dedicated help center is always available to resolve <strong>payment, course, or communication</strong> disputes quickly and transparently.
        </p>
      </motion.div>

      <motion.div
        className={styles.signalStrip}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={viewportOnce}
      >
        <motion.div
          className={styles.signalTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, trackIndex) => (
            <div className={styles.signalSet} key={trackIndex}>
              <span>24/7 Response</span>
              <span>Transparent Mediation</span>
              <span>Evidence-Based Review</span>
              <span>Protected Transactions</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className={styles.features}
        variants={staggerWrap}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          className={styles.card}
          variants={slideLeft}
        >
          <FaHeadset className={styles.icon} />
          <h4>24/7 Support Team</h4>
          <p>
            Our dedicated support team is available around the clock to help you with technical issues, payments, or account management.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={curtainReveal}
        >
          <FaGavel className={styles.icon} />
          <h4>Fair Dispute Resolution</h4>
          <p>
            Any disagreements between mentors and learners are reviewed by our dispute panel to ensure fair and evidence-based outcomes.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={curtainReveal}
        >
          <FaHandshake className={styles.icon} />
          <h4>Transparent Mediation</h4>
          <p>
            Both parties are involved in every step of the resolution process, ensuring transparency and mutual understanding.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={slideRight}
        >
          <FaShieldAlt className={styles.icon} />
          <h4>Secure Protection</h4>
          <p>
            Our blockchain-backed transaction logs protect both users and maintain integrity in every financial and learning interaction.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HelpCenter;
