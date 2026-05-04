import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxLayer = ({ className, offset = 90, reverse = false }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], reverse ? [offset, -offset] : [-offset, offset]);
  const rotate = useTransform(scrollY, [0, 3000], reverse ? [8, -8] : [-8, 8]);

  return <motion.div className={className} style={{ y, rotate }} aria-hidden="true" />;
};

export default ParallaxLayer;
