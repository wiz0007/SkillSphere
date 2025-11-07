import React from "react";
import { motion } from "framer-motion";
import styles from "./Currency.module.scss";
import { FaLock, FaCoins, FaExchangeAlt, FaWallet } from "react-icons/fa";

const Currency = () => {
  return (
    <section className={styles.currencySection} id="currency">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Blockchain-Protected In-App Currency — SkillCoin</h2>
        <p>
          Our platform introduces <strong>SkillCoin</strong> — a secure, blockchain-backed
          digital currency designed to enable seamless, transparent transactions between
          students and mentors.
        </p>
      </motion.div>

      <div className={styles.flowContainer}>
        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaWallet className={styles.icon} />
          <h4>1. Student Top-Up</h4>
          <p>
            Students purchase SkillCoins using traditional payment methods.
            These coins are securely stored in their in-app wallet.
          </p>
        </motion.div>

        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaCoins className={styles.icon} />
          <h4>2. Course Enrollment</h4>
          <p>
            Students use SkillCoins to pay for courses, ensuring quick and trustless
            transactions without third-party interference.
          </p>
        </motion.div>

        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaExchangeAlt className={styles.icon} />
          <h4>3. Escrow Protection</h4>
          <p>
            SkillCoins are securely held in blockchain escrow until the course
            is completed, ensuring fairness for both parties.
          </p>
        </motion.div>

        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaLock className={styles.icon} />
          <h4>4. Mentor Withdrawal</h4>
          <p>
            After successful course completion, mentors receive SkillCoins,
            which can be withdrawn or converted to real currency securely.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Currency;
