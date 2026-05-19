import React from "react";
import { motion } from "framer-motion";
import styles from "./OurTeam.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ayush from "../../assets/team/ayushImg.jpg";
import krishna from "../../assets/team/Krishna.png";
import amandeep from "../../assets/team/amandeep.jpg";
import vaibhav from "../../assets/team/vaibhav.jpg";
import { fadeUp, softPop, staggerWrap, viewportOnce } from "../../motion/presentation";

const teamMembers = [
  {
    name: "Ayushmaan Mishra",
    role: "Member",
    img: ayush,
    linkedin: "https://www.linkedin.com/in/ayushmaan-mishra-254020257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/Ayushma44434272?t=diX25cD-oLYEhuE_-7aLQA&s=08",
    github: "https://github.com/wiz0007",
  },
  {
    name: "Krishna Kapil",
    role: "Member",
    img: krishna,
  },
  {
    name: "Vaibhav Chauhan",
    role: "Member",
    img: vaibhav,
  },
  {
    name: "Amandeep Lohan",
    role: "Member",
    img: amandeep,
  },
];

const OurTeam = () => {
  return (
    <section className={styles.teamSection}>
      <motion.div
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2>Meet Our Team</h2>
        <p>
          Behind every successful learning experience stands a team of dedicated innovators,
          developers, and educators. Together, we're shaping the future of peer-to-peer learning.
        </p>
      </motion.div>

      <motion.div
        className={styles.teamRibbon}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={viewportOnce}
      >
        <span>Creative Direction</span>
        <span>Product Engineering</span>
        <span>Community Strategy</span>
        <span>Platform Vision</span>
      </motion.div>

      <motion.div
        className={styles.teamGrid}
        variants={staggerWrap}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {teamMembers.map((member) => (
          <motion.div
            className={styles.card}
            key={member.name}
            variants={softPop}
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
      </motion.div>
    </section>
  );
};

export default OurTeam;
