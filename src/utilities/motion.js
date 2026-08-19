export const premiumEase = [0.22, 1, 0.36, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: premiumEase },
  },
};

export const revealSoft = {
  hidden: { opacity: 0, scale: 0.985, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.78, ease: premiumEase },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.04,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.22 };
