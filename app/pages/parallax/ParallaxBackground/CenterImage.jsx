"use client";
import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import CanvasAnimation from "./CanvasAnimation";

const CenterImage = ({ heightData }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, heightData + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(scrollY, [heightData, heightData + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
      }}
    >
      <CanvasAnimation />
    </motion.div>
  );
};

export default CenterImage;
