import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CoursesPreview.module.scss";
import { MAIN_SITE_URL } from "../../constants/site";
import { courseCategories } from "../../content/homeContent";
import { premiumEase, revealUp, viewportOnce } from "../../utilities/motion";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const CoursesPreview = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !sectionRef.current || !pinRef.current || !viewportRef.current || !trackRef.current) {
      return undefined;
    }

    const section = sectionRef.current;
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    const counter = counterRef.current;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 901px)",
          mobile: "(max-width: 900px)",
          motionOK: "(prefers-reduced-motion: no-preference)",
        },
        (matchContext) => {
          const { desktop, mobile, motionOK } = matchContext.conditions;
          if (!motionOK) return undefined;

          const cards = gsap.utils.toArray("[data-course-card]", track);
          const total = cards.length;
          const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          const getEndDistance = () => {
            const distance = getDistance();
            return Math.max(window.innerHeight * (mobile ? 1.45 : 1.25), distance * (mobile ? 1.35 : 1.12));
          };

          gsap.set(track, { x: 0 });
          if (progress) gsap.set(progress, { scaleX: 0 });
          if (counter) counter.textContent = `01 / ${String(total).padStart(2, "0")}`;

          const horizontalTween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              id: "skillsphere-courses-horizontal",
              trigger: pin,
              start: mobile ? "top 68px" : "top top",
              end: () => `+=${getEndDistance()}`,
              pin,
              pinSpacing: true,
              scrub: mobile ? 0.42 : 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
              snap: total > 1
                ? {
                    snapTo: 1 / (total - 1),
                    duration: { min: 0.16, max: 0.38 },
                    delay: mobile ? 0.05 : 0.08,
                    ease: "power1.inOut",
                  }
                : false,
              onUpdate: (self) => {
                if (progress) gsap.set(progress, { scaleX: self.progress });
                if (counter) {
                  const current = Math.min(total, Math.round(self.progress * (total - 1)) + 1);
                  counter.textContent = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
                }
              },
            },
          });

          cards.forEach((card, index) => {
            const artwork = card.querySelector("[data-course-artwork]");
            if (index > 0) {
              gsap.fromTo(
                card,
                {
                  rotateY: desktop ? 8 : 4,
                  rotateZ: desktop ? 0.6 : 0.25,
                  scale: desktop ? 0.955 : 0.975,
                  opacity: 0.78,
                  transformOrigin: "left center",
                },
                {
                  rotateY: 0,
                  rotateZ: 0,
                  scale: 1,
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: horizontalTween,
                    start: mobile ? "left 96%" : "left 92%",
                    end: mobile ? "left 34%" : "left 58%",
                    scrub: true,
                  },
                },
              );
            }

            if (artwork) {
              gsap.fromTo(
                artwork,
                { xPercent: desktop ? 5 : 3, scale: 1.035 },
                {
                  xPercent: desktop ? -4 : -2,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: horizontalTween,
                    start: "left 100%",
                    end: "right 0%",
                    scrub: true,
                  },
                },
              );
            }
          });

          return () => {
            horizontalTween.scrollTrigger?.kill();
            horizontalTween.kill();
          };
        },
      );

      return () => media.revert();
    }, section);

    let resizeTimer;
    const refresh = () => ScrollTrigger.refresh();
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 120);
    };

    window.addEventListener("load", refresh, { once: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.fonts?.ready?.then(refresh).catch(() => {});
    const refreshTimer = window.setTimeout(refresh, 120);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className={styles.coursesPreview}
      id="courses"
      aria-labelledby="courses-title"
    >
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
              <h2 id="courses-title">Find the direction you want to grow in.</h2>
            </div>
            <div className={styles.headingSide}>
              <p>Browse focused learning paths built around practical work and mentor guidance.</p>
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
                      <div className={styles.artwork} data-course-artwork>
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

              <a className={styles.endCard} data-course-card href={MAIN_SITE_URL}>
                <span className={styles.endKicker}>Keep exploring</span>
                <strong>Find more skills, mentors, and learning paths on SkillSphere.</strong>
                <span className={styles.endArrow} aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.progressRow} aria-hidden="true">
            <span>Scroll to explore</span>
            <div className={styles.progressTrack}><i ref={progressRef} /></div>
            <span ref={counterRef}>01 / 05</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
