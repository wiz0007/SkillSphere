import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./OurTeam.module.scss";
import { developerProfile } from "../../content/homeContent";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

const OurTeam = () => {
  const developer = developerProfile;
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.teamSection} id="team" aria-labelledby="team-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <div>
            <span className={styles.eyebrow}>Developer profile</span>
            <h2 id="team-title">Building SkillSphere from interface to infrastructure.</h2>
          </div>
          <p>A closer look at the product and engineering work shaping the SkillSphere experience.</p>
        </motion.header>

        <article className={styles.profile}>
          <motion.div
            className={styles.portraitWrap}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: premiumEase }}
          >
            <motion.img
              src={developer.image}
              alt={developer.name}
              className={styles.portrait}
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              transition={{ duration: 0.55, ease: premiumEase }}
            />
            <span className={styles.count}>Product · Engineering</span>
          </motion.div>

          <motion.div
            className={styles.profileBody}
            initial={reduceMotion ? false : { opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: reduceMotion ? 0 : 0.78, delay: 0.08, ease: premiumEase }}
          >
            <div className={styles.roleLine}>
              <span className={styles.liveDot} aria-hidden="true" />
              {developer.role}
            </div>

            <div className={styles.identity}>
              <h3>{developer.name}</h3>
              <p>{developer.bio}</p>
            </div>

            <div className={styles.profileFooter}>
              <div className={styles.scope} aria-label="Project responsibilities">
                {developer.scope.map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className={styles.socials} aria-label={`${developer.name} social links`}>
                {developer.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${developer.name} on ${link.label}`}
                      title={link.label}
                      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                      transition={{ duration: 0.22, ease: premiumEase }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default OurTeam;
