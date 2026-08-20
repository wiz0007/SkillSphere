import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Environment.module.scss";
import { communityFeatures } from "../../content/homeContent";
import { revealUp, viewportOnce } from "../../utilities/motion";

gsap.registerPlugin(ScrollTrigger);

const CommunityVisual = ({ type }) => {
  if (type === "chat") {
    return (
      <div className={`${styles.visualCanvas} ${styles.chatVisual}`} aria-hidden="true">
        <div className={styles.chatTop}><span /><strong>Mentor conversation</strong><i /></div>
        <div className={styles.messages}>
          <span className={styles.messageLeft}>Move that state closer to the component that owns it.</span>
          <span className={styles.messageRight}>Then the child only receives what it needs?</span>
          <span className={styles.messageLeft}>Exactly. Test the update path once more.</span>
        </div>
        <div className={styles.composer}><span>Continue the conversation…</span><b>↗</b></div>
      </div>
    );
  }

  if (type === "group") {
    return (
      <div className={`${styles.visualCanvas} ${styles.groupVisual}`} aria-hidden="true">
        <div className={styles.groupHeader}>
          <div className={styles.avatarStack}><span>A</span><span>K</span><span>R</span><span>+8</span></div>
          <small>Frontend sprint · Week 03</small>
        </div>
        <div className={styles.goalCard}>
          <span>Shared goal</span>
          <strong>Build and ship a responsive dashboard</strong>
        </div>
        <div className={styles.groupGrid}>
          <div><span>Progress</span><strong>72%</strong><i /></div>
          <div><span>Check-ins</span><strong>18</strong><small>This week</small></div>
        </div>
      </div>
    );
  }

  if (type === "feedback") {
    return (
      <div className={`${styles.visualCanvas} ${styles.feedbackVisual}`} aria-hidden="true">
        <div className={styles.reviewTop}><span>Review request</span><strong>UI state handling</strong></div>
        <div className={styles.reviewCode}>
          <i /><i /><i /><i /><i />
          <span className={styles.commentPin}>1</span>
        </div>
        <div className={styles.reviewComment}>
          <span className={styles.reviewAvatar}>AM</span>
          <div><strong>Mentor feedback</strong><p>Keep the source of truth here and derive the view state below.</p></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.visualCanvas} aria-hidden="true">
      <div className={styles.roomTop}><span className={styles.liveDot} /> Live room <small>48:12</small></div>
      <div className={styles.roomStage}>
        <div className={styles.sharedScreen}>
          <span /><span /><span /><span /><span />
          <small>skillsphere / session.jsx</small>
        </div>
        <div className={styles.peopleColumn}>
          <div><span>AM</span><strong>Mentor</strong><small>Sharing</small></div>
          <div><span>K</span><strong>Learner</strong><small>Live</small></div>
        </div>
      </div>
    </div>
  );
};

const Environment = () => {
  const sectionRef = useRef(null);
  const deckRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !sectionRef.current || !deckRef.current) return undefined;

    const deck = deckRef.current;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-community-card]");
      if (cards.length < 2) return undefined;

      const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

      gsap.set(cards, {
        zIndex: (index) => index + 1,
        transformOrigin: "50% 20%",
        force3D: true,
      });
      gsap.set(cards.slice(1), { yPercent: 106, force3D: true });

      const setActiveLayers = (active) => {
        cards.forEach((card) => {
          card.style.willChange = active ? "transform, opacity" : "auto";
        });
      };

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "skillsphere-community-stack",
          trigger: deck,
          start: () => (isMobile() ? "top 72px" : "top 9%"),
          end: () => `+=${Math.max(window.innerHeight * (cards.length - 1) * (isMobile() ? 0.72 : 0.78), 1180)}`,
          pin: true,
          pinSpacing: true,
          scrub: isMobile() ? 0.22 : 0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          fastScrollEnd: true,
          onEnter: () => setActiveLayers(true),
          onEnterBack: () => setActiveLayers(true),
          onLeave: () => setActiveLayers(false),
          onLeaveBack: () => setActiveLayers(false),
        },
      });

      cards.slice(1).forEach((card, index) => {
        const previous = cards[index];
        const label = `card-${index + 1}`;

        timeline
          .addLabel(label)
          .to(
            previous,
            {
              scale: 0.972,
              y: -10,
              opacity: 0.68,
              duration: 0.38,
              force3D: true,
            },
            label,
          )
          .to(
            card,
            {
              yPercent: 0,
              duration: 0.62,
              force3D: true,
            },
            label,
          );
      });

      timeline.to(cards[cards.length - 1], { duration: 0.08 });

      return () => {
        setActiveLayers(false);
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className={styles.environment} id="community" aria-labelledby="community-title">
      <div className={styles.headingWrap}>
        <motion.header
          className={styles.heading}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          <span className={styles.eyebrow}>Community</span>
          <h2 id="community-title">Learning that stays connected.</h2>
          <p>Live guidance can continue as conversation, shared progress, and focused feedback.</p>
        </motion.header>
      </div>

      <div ref={deckRef} className={styles.deck}>
        <div className={styles.deckFrame}>
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                className={styles.card}
                data-community-card
                key={feature.id}
                style={{ "--card-index": index }}
              >
                <div className={styles.cardBackdrop} aria-hidden="true" />

                <div className={styles.cardCopy}>
                  <div className={styles.cardTopline}>
                    <span className={styles.cardNumber}>0{index + 1}</span>
                    <div className={styles.cardIcon}><Icon /></div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.panelEyebrow}>{feature.eyebrow}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                    <small>{feature.meta}</small>
                  </div>
                </div>

                <div className={styles.cardVisual}>
                  <CommunityVisual type={feature.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Environment;
