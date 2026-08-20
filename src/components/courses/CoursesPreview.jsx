import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CoursesPreview.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import { courseCategories } from "../../content/homeContent";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const CoursesPreview = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !sectionRef.current || !pinRef.current || !viewportRef.current || !trackRef.current) {
      return undefined;
    }

    const section = sectionRef.current;
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    const context = gsap.context(() => {
      const isMobile = () => window.matchMedia("(max-width: 900px)").matches;
      const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const getEndDistance = () => Math.max(
        window.innerHeight * (isMobile() ? 1.2 : 1.05),
        getDistance() * (isMobile() ? 1.08 : 0.98),
      );

      gsap.set(track, { x: 0, force3D: true });

      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          id: "skillsphere-courses-horizontal",
          trigger: pin,
          start: () => (isMobile() ? "top 68px" : "top top"),
          end: () => `+=${getEndDistance()}`,
          pin,
          pinSpacing: true,
          scrub: isMobile() ? 0.2 : 0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          fastScrollEnd: true,
          onEnter: () => { track.style.willChange = "transform"; },
          onEnterBack: () => { track.style.willChange = "transform"; },
          onLeave: () => { track.style.willChange = "auto"; },
          onLeaveBack: () => { track.style.willChange = "auto"; },
        },
      });

      return () => {
        track.style.willChange = "auto";
        horizontalTween.scrollTrigger?.kill();
        horizontalTween.kill();
      };
    }, section);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className={styles.coursesPreview} id="courses" aria-labelledby="courses-title">
      <div ref={pinRef} className={styles.pinShell}>
        <div className={styles.headingWrap}>
          <motion.header
            className={styles.heading}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealUp}
          >
            <div>
              <span className={styles.eyebrow}>Explore skills</span>
              <h2 id="courses-title">Choose what to build next.</h2>
            </div>
            <div className={styles.headingSide}>
              <p>Focused learning paths built around practical work and mentor guidance.</p>
              <a href={MAIN_SITE_URL}>View all courses <span aria-hidden="true">↗</span></a>
            </div>
          </motion.header>
        </div>

        <div className={styles.carouselFrame}>
          <div ref={viewportRef} className={styles.viewport}>
            <div ref={trackRef} className={styles.track} aria-label="Course categories">
              {courseCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <article className={styles.courseCard} data-course-card key={category.id}>
                    <div className={`${styles.visual} ${styles[category.visual]}`}>
                      <div className={styles.visualTopline}>
                        <span className={styles.visualIndex}>0{index + 1}</span>
                        <span className={styles.visualIcon} aria-hidden="true"><Icon /></span>
                      </div>
                      <div className={styles.artwork}>
                        <img
                          src={category.image}
                          alt={category.imageAlt}
                          loading="lazy"
                          decoding="async"
                          style={{ objectPosition: category.imagePosition }}
                        />
                        <span className={styles.imageShade} aria-hidden="true" />
                      </div>
                    </div>

                    <div className={styles.cardCopy}>
                      <span>{category.kicker}</span>
                      <h3>{category.title}</h3>
                      <div className={styles.topics}>
                        {category.topics.map((topic) => <span key={topic}>{topic}</span>)}
                      </div>
                    </div>
                  </article>
                );
              })}

              <motion.a
                className={styles.endCard}
                data-course-card
                href={MAIN_SITE_URL}
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              >
                <div className={styles.endTop}>
                  <span className={styles.endKicker}>Explore more</span>
                  <motion.span
                    className={styles.endArrow}
                    variants={{ hover: { x: 5, y: -5, rotate: 4 } }}
                    transition={{ duration: 0.22, ease: premiumEase }}
                    aria-hidden="true"
                  >
                    ↗
                  </motion.span>
                </div>

                <div className={styles.endVisual} aria-hidden="true">
                  <motion.div
                    className={styles.endOrbit}
                    variants={{ hover: { rotate: 12, scale: 1.025 } }}
                    transition={{ duration: 0.42, ease: premiumEase }}
                  >
                    <span />
                    <span />
                    <span />
                  </motion.div>
                  <span className={styles.endCore}>+</span>
                </div>

                <div className={styles.endCopy}>
                  <strong>Keep discovering what you can learn next.</strong>
                  <span>Courses, mentors, and practical learning paths live on SkillSphere.</span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
