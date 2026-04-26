import React from "react";
import { motion } from "framer-motion";
import styles from "./OurTeam.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ayush from "../../assets/team/ayushImg.jpg";
import krishna from "../../assets/team/Krishna.png";
import amandeep from "../../assets/team/amandeep.jpg";
import vaibhav from "../../assets/team/vaibhav.jpg";

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
  },
  {
    name: "Vaibhav Chauhan",
    role: "Lead Full Stack Developer",
    img: vaibhav,
  },
  {
    name: "Amandeep Lohan",
    role: "Marketing & Community Head",
    img: amandeep,
  },
];

const OurTeam = () => {
  return (
    <section className={styles.teamSection}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Team</h2>
        <p>
          Behind every successful learning experience stands a team of dedicated innovators,
          developers, and educators. Together, we're shaping the future of peer-to-peer learning.
        </p>
      </motion.div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <motion.div
            className={styles.card}
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className={styles.socials}>
              {member.linkedin && (
                <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} aria-label={`${member.name} on X`} target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              )}
              {member.github && (
                <a href={member.github} aria-label={`${member.name} on GitHub`} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
