"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const CenterImage = ({ heightData }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [heightData, heightData + 500],
    [1, 0]
  );

  const scale = useTransform(scrollYProgress, [0, 1], ["75%", "200%"]);

  return (
    <div className="overflow-hidden sticky top-0">
      <motion.div
        className="h-screen w-full"
        style={{
          scale,
          opacity,
        }}
      >
        <Image
          className="w-full h-full object-auto"
          src="/assets/rocks.webp"
          alt="surati"
          width={1900}
          height={1900}
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default CenterImage;
