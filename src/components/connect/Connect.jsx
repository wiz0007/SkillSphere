import React from "react";
import { motion } from "framer-motion";
import styles from "./Connect.module.scss";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.connectSection} id="connect">
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Join Our Skill-Sharing Community</h2>
        <p>
          Whether you’re a passionate <strong>mentor</strong> ready to teach or an eager{" "}
          <strong>student</strong> looking to learn, connect now and be part of our
          peer-to-peer learning revolution.
        </p>
      </motion.div>

      {/* Cards */}
      <div className={styles.cards}>
        {/* Mentor Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaChalkboardTeacher className={styles.icon} />
          <h3>For Mentors</h3>
          <p>
            Create courses, share your expertise, and earn by teaching students from across
            the world.
          </p>
          <div className={styles.btnGroup}>
            <button
              className={styles.joinBtn}
              onClick={() => navigate("/mentor/signup")}
            >
              Join as Mentor
            </button>
            <button
              className={styles.loginBtn}
              onClick={() => navigate("/mentor/login")}
            >
              Login
            </button>
          </div>
        </motion.div>

        {/* Student Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaUserGraduate className={styles.icon} />
          <h3>For Students</h3>
          <p>
            Explore courses, interact with mentors, and learn practical skills that elevate
            your career and creativity.
          </p>
          <div className={styles.btnGroup}>
            <button
              className={styles.joinBtn}
              onClick={() => navigate("/student/signup")}
            >
              Join as Student
            </button>
            <button
              className={styles.loginBtn}
              onClick={() => navigate("/student/login")}
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;

