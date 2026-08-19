import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./Navbar.module.scss";
import logo from "../../assets/skillSphere-mark.svg";
import { BRAND_NAME, MAIN_SITE_URL } from "../../constants/site";
import { premiumEase } from "../../utilities/motion";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "Community", href: "#community", id: "community" },
  { label: "SkillCoin", href: "#currency", id: "currency" },
  { label: "Contact", href: "#connect", id: "connect" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-34% 0px -56% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const handleKeyDown = (event) => {
      if (!menuOpen) return;

      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll("a, button");
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      aria-label="Primary navigation"
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.58, ease: premiumEase }}
    >
      <div className={styles.navContainer}>
        <motion.a
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label={`${BRAND_NAME} home`}
          whileHover={reduceMotion ? undefined : { y: -1 }}
        >
          <img src={logo} alt="" />
          <span className={styles.wordmark}><strong>Skill</strong><span>Sphere</span></span>
        </motion.a>

        <ul className={styles.desktopLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a className={activeId === item.id ? styles.activeLink : ""} href={item.href}>
                {item.label}
                {activeId === item.id && (
                  <motion.span
                    className={styles.activeIndicator}
                    layoutId="navbar-active-indicator"
                    transition={{ duration: reduceMotion ? 0 : 0.32, ease: premiumEase }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navButtons}>
          <motion.a whileHover={reduceMotion ? undefined : { y: -2 }} href={MAIN_SITE_URL} className={styles.loginBtn}>Login</motion.a>
          <motion.a whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }} href={MAIN_SITE_URL} className={styles.signupBtn}>Join now</motion.a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            ref={menuRef}
            className={styles.mobilePanel}
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: premiumEase }}
          >
            <motion.div
              className={styles.mobileInner}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={activeId === item.id ? styles.mobileActive : ""}
                  variants={{
                    hidden: { opacity: 0, x: 18 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: premiumEase } },
                  }}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </motion.a>
              ))}
              <motion.div
                className={styles.mobileActions}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: premiumEase } },
                }}
              >
                <a href={MAIN_SITE_URL} onClick={closeMenu}>Login</a>
                <a href={MAIN_SITE_URL} onClick={closeMenu}>Join SkillSphere</a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
