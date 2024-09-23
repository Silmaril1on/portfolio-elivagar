"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PlanetAnimation = () => {
  const [angle, setAngle] = useState(0);
  const [smallAngle, setSmallAngle] = useState(0);
  const radius = 124;
  const centerX = 200;
  const centerY = 180;
  const smallCircleRadius = 35;
  const smallerCircleRadius = 20;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmallAngle((prev) => (prev + 1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const cx = centerX + radius * Math.cos((angle * Math.PI) / 180);
  const cy = centerY + radius * Math.sin((angle * Math.PI) / 180);
  const smcx = centerX + radius * Math.cos((smallAngle * Math.PI) / 180);
  const smcy = centerY + radius * Math.sin((smallAngle * Math.PI) / 180);

  return (
    <div className="w-96 h-96 sticky top-[300px] left-[140px]">
      <svg height="100%" width="100%">
        <circle
          r="124"
          cx="200"
          cy="180"
          fill="none"
          stroke="rgba(252,245,223,.95)"
          strokeWidth={1}
        />
      </svg>

      <svg height="100%" width="100%" className="absolute top-0 left-0">
        <motion.circle
          r={smallCircleRadius}
          cx={cx}
          cy={cy}
          fill="black"
          stroke="rgba(252,245,223,.95)"
          strokeWidth={1}
        />
      </svg>
      <svg height="100%" width="100%" className="absolute top-0 left-0">
        <motion.circle
          r={smallerCircleRadius}
          cx={smcx}
          cy={smcy}
          fill="black"
          stroke="rgba(252,245,223,.95)"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
};

export default PlanetAnimation;
