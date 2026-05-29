import React from "react";
import { motion } from "framer-motion";
import styles from "./Currency.module.scss";
import { FaCoins, FaExchangeAlt, FaLock, FaWallet } from "react-icons/fa";
import { fadeUp, viewportOnce } from "../../motion/presentation";

const Currency = () => {
  return (
    <section className={styles.currencySection} id="currency">
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2>Blockchain-Protected In-App Currency - SkillCoin</h2>
        <p>
          Our platform introduces <strong>SkillCoin</strong> - a secure, blockchain-backed
          digital currency designed to enable seamless, transparent transactions between
          students and mentors.
        </p>
      </motion.div>

      <div className={styles.ledgerStrip}>
        <span>{`{ TOP-UP }`}</span>
        <span>{`{ COURSE PAYMENT }`}</span>
        <span>{`{ ESCROW }`}</span>
        <span>{`{ MENTOR WITHDRAWAL }`}</span>
      </div>

      <div className={styles.flowContainer}>
        <div className={styles.step}>
          <FaWallet className={styles.icon} />
          <h4>1. Student Top-Up</h4>
          <p>
            Students purchase SkillCoins using traditional payment methods.
            These coins are securely stored in their in-app wallet.
          </p>
        </div>

        <div className={styles.step}>
          <FaCoins className={styles.icon} />
          <h4>2. Course Enrollment</h4>
          <p>
            Students use SkillCoins to pay for courses, ensuring quick and trustless
            transactions without third-party interference.
          </p>
        </div>

        <div className={styles.step}>
          <FaExchangeAlt className={styles.icon} />
          <h4>3. Escrow Protection</h4>
          <p>
            SkillCoins are securely held in blockchain escrow until the course
            is completed, ensuring fairness for both parties.
          </p>
        </div>

        <div className={styles.step}>
          <FaLock className={styles.icon} />
          <h4>4. Mentor Withdrawal</h4>
          <p>
            After successful course completion, mentors receive SkillCoins,
            which can be withdrawn or converted to real currency securely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Currency;
