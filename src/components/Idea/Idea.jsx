import React from "react";
import { motion } from "framer-motion";
import styles from "./Idea.module.scss";
import { FaChalkboardTeacher, FaExchangeAlt, FaUsers } from "react-icons/fa";
import { BRAND_NAME } from "../../constants/site";

const showcases = [
  {
    id: "01",
    icon: FaChalkboardTeacher,
    title: "Mentors become the headline act",
    copy: "Teach through sessions, guidance, and productized expertise instead of getting buried inside a generic catalogue.",
  },
  {
    id: "02",
    icon: FaUsers,
    title: "Learners move through real momentum",
    copy: "Every skill path is framed as progress, collaboration, and visible transformation, not just passive content consumption.",
  },
  {
    id: "03",
    icon: FaExchangeAlt,
    title: "Community and value stay connected",
    copy: "Discovery, interaction, and trusted exchange live in one flow so the platform feels like a system, not scattered tools.",
  },
];

const Idea = () => {
  return (
    <section className={styles.mainIdea}>
      <div className={styles.backdrop}></div>
      <div className={styles.inner}>
        <motion.div
          className={styles.story}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <span className={styles.kicker}>Why it feels different</span>
          <h2>We are presenting {BRAND_NAME} like a product reveal, not a plain website.</h2>
          <p>
            The mission is bigger than listing features. {BRAND_NAME} should feel like
            a stage where skill-sharing becomes cinematic, premium, and memorable from
            the very first interaction.
          </p>

          <div className={styles.statementPanel}>
            <span>Presentation concept</span>
            <strong>Learning should look as valuable as the transformation it promises.</strong>
          </div>
        </motion.div>

        <div className={styles.showcaseGrid}>
          {showcases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                className={styles.showcaseCard}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.index}>{item.id}</span>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Idea;
