export const premiumEase = [0.22, 1, 0.36, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: premiumEase },
  },
};

export const revealSoft = {
  hidden: { opacity: 0, scale: 0.992, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: premiumEase },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.02,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.16 };
