"use client";
import { motion } from "framer-motion";
import { animationForHeader } from "../framer/motionvalues";

const HeaderAnimation = ({ text, className }) => {
  const isMultipleWords = text.split(" ").length > 1;
  const elements = isMultipleWords ? text.split(" ") : text.split("");
  return (
    <div className="overflow-hidden flex justify-center">
      <motion.div
        variants={animationForHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-cream flex"
      >
        {elements.map((element, index) => {
          return (
            <motion.h1
              variants={animationForHeader}
              className={className}
              key={index}
              style={{
                marginRight: isMultipleWords ? "8px" : "0px",
              }}
            >
              {element}
            </motion.h1>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HeaderAnimation;
