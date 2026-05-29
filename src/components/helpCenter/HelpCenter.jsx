import React from "react";
import { motion } from "framer-motion";
import styles from "./HelpCenter.module.scss";
import { FaHeadset, FaGavel, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { fadeUp, viewportOnce } from "../../motion/presentation";

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

      <div className={styles.signalStrip}>
        <span>{`{ 24/7 RESPONSE }`}</span>
        <span>{`{ TRANSPARENT MEDIATION }`}</span>
        <span>{`{ PROTECTED TRANSACTIONS }`}</span>
      </div>

      {/* Feature Cards */}
      <div className={styles.features}>
        <div className={styles.card}>
          <FaHeadset className={styles.icon} />
          <h4>24/7 Support Team</h4>
          <p>
            Our dedicated support team is available around the clock to help you with technical issues, payments, or account management.
          </p>
        </div>

        <div className={styles.card}>
          <FaGavel className={styles.icon} />
          <h4>Fair Dispute Resolution</h4>
          <p>
            Any disagreements between mentors and learners are reviewed by our dispute panel to ensure fair and evidence-based outcomes.
          </p>
        </div>

        <div className={styles.card}>
          <FaHandshake className={styles.icon} />
          <h4>Transparent Mediation</h4>
          <p>
            Both parties are involved in every step of the resolution process, ensuring transparency and mutual understanding.
          </p>
        </div>

        <div className={styles.card}>
          <FaShieldAlt className={styles.icon} />
          <h4>Secure Protection</h4>
          <p>
            Our blockchain-backed transaction logs protect both users and maintain integrity in every financial and learning interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
