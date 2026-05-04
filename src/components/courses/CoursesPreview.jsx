import React from "react";
import { motion } from "framer-motion";
import styles from "./CoursesPreview.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import skillSphereMark from "../../assets/skillSphere-mark.svg";
import ParallaxLayer from "../parallaxLayer/ParallaxLayer";

const categories = [
  {
    id: 1,
    title: "Web Development",
    description: "Build practical frontend, backend, and full-stack skills with mentor-led guidance.",
    topics: "React, Node.js, APIs, Databases",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    tone: "blue",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Learn how to design digital products that feel intuitive, polished, and human-centered.",
    topics: "Figma, Wireframes, Prototyping, Design Systems",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=60",
    tone: "gold",
  },
  {
    id: 3,
    title: "Photography & Media",
    description: "Explore visual storytelling, camera basics, editing workflows, and creative media production.",
    topics: "Photography, Editing, Storytelling, Content Creation",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60",
    tone: "coral",
  },
  {
    id: 4,
    title: "Business & Marketing",
    description: "Grow strategic thinking across branding, promotion, audience building, and digital outreach.",
    topics: "SEO, Branding, Campaigns, Social Media",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    tone: "green",
  },
];

const reelCards = [
  { title: "Web Systems", lines: ["Frontend flows", "Backend logic", "Deployment paths"] },
  { title: "Design Lab", lines: ["Wireframes", "Interaction systems", "Visual polish"] },
  { title: "Media Studio", lines: ["Camera craft", "Editing rhythm", "Content direction"] },
  { title: "Growth Engine", lines: ["Brand strategy", "Audience reach", "Campaign thinking"] },
];

const CoursesPreview = () => {
  return (
    <section className={styles.coursesPreview} id="courses">
      <ParallaxLayer className={styles.parallaxGlowOne} offset={70} />
      <ParallaxLayer className={styles.parallaxGlowTwo} offset={55} reverse />
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Experience The Spectrum</span>
        <h2>Skill categories staged like a premium product gallery.</h2>
        <p>
          Each category is presented as a destination inside the SkillSphere world,
          giving the viewer a sense of motion, possibility, and ambition before they
          even enter the main platform.
        </p>
      </motion.div>

      <motion.div
        className={styles.showcaseReel}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.reelGrid}></div>
        <div className={styles.reelSweep}></div>
        <div className={styles.reelHeader}>
          <span className={styles.reelTag}>Category Reel</span>
          <p>Skill domains staged like destinations inside the SkillSphere story.</p>
        </div>
        <div className={styles.reelCards}>
          {reelCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.reelCard}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <div className={styles.reelDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.reelThumbnail}></div>
              <strong>{card.title}</strong>
              <div className={styles.reelLines}>
                {card.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.reelOverlay}>
          <strong>Animated category reel</strong>
          <p>Skill domains presented like destinations inside the product story.</p>
        </div>
      </motion.div>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <motion.article
            key={category.id}
            className={`${styles.card} ${styles[category.tone]}`}
            initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.12 + index * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={category.image} alt={category.title} />
              <div className={styles.imageOverlay}></div>
              <div className={styles.videoHud}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.scanSweep}></div>
              <div className={styles.logoBadge}>
                <img src={skillSphereMark} alt="SkillSphere mark" />
              </div>
              <span className={styles.indexTag}>0{category.id}</span>
            </div>
            <div className={styles.info}>
              <p className={styles.label}>Learning Category</p>
              <h3>{category.title}</h3>
              <p className={styles.description}>{category.description}</p>
              <p className={styles.topics}>Popular topics: {category.topics}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a href={MAIN_SITE_URL} className={styles.viewAllBtn}>Launch The Full Experience</a>
      </motion.div>
    </section>
  );
};

export default CoursesPreview;
