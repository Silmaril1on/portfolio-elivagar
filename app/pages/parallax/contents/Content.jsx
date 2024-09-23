"use client";

import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Content = ({ className, start, end, children }) => {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div className={className} ref={contentRef} style={{ transform }}>
      {children}
    </motion.div>
  );
};

export default Content;
