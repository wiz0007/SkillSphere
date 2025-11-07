import React from "react";
import { motion } from "framer-motion";
import styles from "./CoursesPreview.module.scss";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Mastering UI/UX Design",
    instructor: "Sarah Johnson",
    category: "Design",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Full-Stack Web Development Bootcamp",
    instructor: "David Kim",
    category: "Programming",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Creative Photography for Beginners",
    instructor: "Alex Carter",
    category: "Photography",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Digital Marketing & SEO Strategy",
    instructor: "Priya Sharma",
    category: "Marketing",
    rating: 4.6,
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
        Featured Courses
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore trending courses created by expert instructors from across the globe.  
        Learn, upskill, and achieve more — your journey starts here.
      </motion.p>

      <div className={styles.grid}>
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={course.image} alt={course.title} />
            </div>
            <div className={styles.info}>
              <h3>{course.title}</h3>
              <p className={styles.category}>{course.category}</p>
              <p className={styles.instructor}>By {course.instructor}</p>
              <div className={styles.rating}>
                <FaStar /> {course.rating}
              </div>
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
        <button className={styles.viewAllBtn}>View All Courses</button>
      </motion.div>
    </section>
  );
};

export default CoursesPreview;
