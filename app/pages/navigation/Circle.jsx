import { fromTop } from "@/app/framer/motionvalues";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={circleRef}
      variants={fromTop}
      initial="hidden"
      animate="visible"
      className="fixed w-full center left-0 top-[500px] xl:left-0 xl:-top-16"
    >
      <motion.svg
        style={{ rotate }}
        className="origin-center font-light pointer-events-none w-[90px] xl:w-[120px] h-[90px] xl:h-[120px] absolute xl:static -left-14"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="27">
          <textPath href="#circle">
            elivagar &#8226; elivagar &#8226; elivagar &#8226;
          </textPath>
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default Circle;
