import React from "react";
import { motion } from "framer-motion";
import styles from "./Currency.module.scss";
import { FaCoins, FaExchangeAlt, FaLock, FaWallet } from "react-icons/fa";
import { curtainReveal, fadeUp, softPop, staggerWrap, viewportOnce } from "../../motion/presentation";

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

      <motion.div
        className={styles.coinScene}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={viewportOnce}
      >
        <div className={styles.sceneCore}>
          <div className={styles.ringOne}></div>
          <div className={styles.ringTwo}></div>
          <div className={styles.coinCenter}>SC</div>
          <motion.span className={styles.coinNode} animate={{ y: [0, -16, 0] }} transition={{ duration: 4, repeat: Infinity }}>$</motion.span>
          <motion.span className={`${styles.coinNode} ${styles.nodeTwo}`} animate={{ y: [0, 14, 0] }} transition={{ duration: 4.6, repeat: Infinity }}></motion.span>
          <motion.span className={`${styles.coinNode} ${styles.nodeThree}`} animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}></motion.span>
        </div>
        <div className={styles.sceneLegend}>
          <span>Top-Up</span>
          <span>Escrow</span>
          <span>Withdrawal</span>
        </div>
      </motion.div>

      <motion.div
        className={styles.flowContainer}
        variants={staggerWrap}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          className={styles.step}
          variants={curtainReveal}
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
          variants={softPop}
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
          variants={curtainReveal}
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
          variants={softPop}
        >
          <FaLock className={styles.icon} />
          <h4>4. Mentor Withdrawal</h4>
          <p>
            After successful course completion, mentors receive SkillCoins,
            which can be withdrawn or converted to real currency securely.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Currency;
