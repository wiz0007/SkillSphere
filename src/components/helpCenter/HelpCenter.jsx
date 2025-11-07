import React from "react";
import { motion } from "framer-motion";
import styles from "./HelpCenter.module.scss";
import { FaHeadset, FaGavel, FaHandshake, FaShieldAlt } from "react-icons/fa";

const HelpCenter = () => {
  return (
    <section className={styles.helpCenter}>
      {/* Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>24/7 Help Center & Dispute Resolution</h2>
        <p>
          We ensure a <strong>safe and fair environment</strong> for both students and mentors.
          Our dedicated help center is always available to resolve <strong>payment, course, or communication</strong> disputes quickly and transparently.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className={styles.features}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaHeadset className={styles.icon} />
          <h4>24/7 Support Team</h4>
          <p>
            Our dedicated support team is available around the clock to help you with technical issues, payments, or account management.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaGavel className={styles.icon} />
          <h4>Fair Dispute Resolution</h4>
          <p>
            Any disagreements between mentors and learners are reviewed by our dispute panel to ensure fair and evidence-based outcomes.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaHandshake className={styles.icon} />
          <h4>Transparent Mediation</h4>
          <p>
            Both parties are involved in every step of the resolution process, ensuring transparency and mutual understanding.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaShieldAlt className={styles.icon} />
          <h4>Secure Protection</h4>
          <p>
            Our blockchain-backed transaction logs protect both users and maintain integrity in every financial and learning interaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpCenter;
