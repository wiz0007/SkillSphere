import React from "react";
import { motion } from "framer-motion";
import styles from "./CoursesPreview.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import skillSphereMark from "../../assets/skillSphere-mark.svg";

const categories = [
  {
    id: 1,
    title: "Web Development",
    description: "Build practical frontend, backend, and full-stack skills with mentor-led guidance.",
    topics: "React, Node.js, APIs, Databases",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Learn how to design digital products that feel intuitive, polished, and human-centered.",
    topics: "Figma, Wireframes, Prototyping, Design Systems",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Photography & Media",
    description: "Explore visual storytelling, camera basics, editing workflows, and creative media production.",
    topics: "Photography, Editing, Storytelling, Content Creation",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Business & Marketing",
    description: "Grow strategic thinking across branding, promotion, audience building, and digital outreach.",
    topics: "SEO, Branding, Campaigns, Social Media",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
];

const CoursesPreview = () => {
  return (
    <section className={styles.coursesPreview} id="courses">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Skill Categories
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        SkillSphere connects learners and mentors across diverse fields. These categories
        give a quick glimpse of the kinds of skills and learning paths available on the platform.
      </motion.p>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={category.image} alt={category.title} />
              <div className={styles.logoBadge}>
                <img src={skillSphereMark} alt="SkillSphere mark" />
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.label}>Learning Category</p>
              <h3>{category.title}</h3>
              <p className={styles.description}>{category.description}</p>
              <p className={styles.topics}>Popular topics: {category.topics}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a href={MAIN_SITE_URL} className={styles.viewAllBtn}>Explore on SkillSphere</a>
      </motion.div>
    </section>
  );
};

export default CoursesPreview;
