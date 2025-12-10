import React from "react";
import { motion } from "framer-motion";
import styles from "./OurTeam.module.scss";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import ayush from "../../assets/team/ayushImg.jpg"
import krishna from "../../assets/team/Krishna.png"
import amandeep from "../../assets/team/amandeep.jpg"
import vaibhav from "../../assets/team/vaibhav.jpg"

// Static data for now
const teamMembers = [
  {
    name: "Ayushmaan Mishra",
    role: "Founder & CEO",
    img: ayush,
    linkedin: "https://www.linkedin.com/in/ayushmaan-mishra-254020257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/Ayushma44434272?t=diX25cD-oLYEhuE_-7aLQA&s=08",
    github: "https://github.com/wiz0007",
  },
  {
    name: "Krishna Kapil",
    role: "Chief Design Officer",
    img: krishna,
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Vaibhav Chauhan",
    role: "Lead Full Stack Developer",
    img: vaibhav,
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Amandeep Lohan",
    role: "Marketing & Community Head",
    img: amandeep,
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
