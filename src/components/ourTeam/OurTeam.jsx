import React from "react";
import { motion } from "framer-motion";
import styles from "./OurTeam.module.scss";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

// Static data for now
const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Priya Sharma",
    role: "Chief Design Officer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Rohan Gupta",
    role: "Lead Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Neha Verma",
    role: "Marketing & Community Head",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const OurTeam = () => {
  return (
    <section className={styles.teamSection}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Team</h2>
        <p>
          Behind every successful learning experience stands a team of dedicated innovators, developers, and educators.
          Together, we’re shaping the future of peer-to-peer learning.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className={styles.socials}>
              <a href={member.linkedin} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={member.twitter} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href={member.github} aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
