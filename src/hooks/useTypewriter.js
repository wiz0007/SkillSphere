import { useEffect, useState } from "react";

const useReducedMotionPreference = () => {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduceMotion(event.matches);
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduceMotion;
};

const useTypewriter = (text, speed = 72) => {
  const reduceMotion = useReducedMotionPreference();
  const [value, setValue] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) {
      setValue(text);
      return undefined;
    }

    setValue("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed, reduceMotion]);

  return { value, reduceMotion };
};

export default useTypewriter;
