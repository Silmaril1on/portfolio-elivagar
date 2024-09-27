import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardsHeader = () => {
  const text = [
    "Beyond my passion for coding and gaming,",
    "i find joy in expressing myself through digital art",
    "using PENUP. I love transforming ideas into visual pieces,",
    "It's a way for me to unwind, explore new concepts, and share my personal artistic journey.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = text.join(" ");
    if (charIndex < fullText.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [charIndex, text]);

  const renderTextWithPENUP = (displayedText) => {
    const splitText = displayedText.split("PENUP");
    return (
      <>
        {splitText[0]}
        {splitText.length > 1 && (
          <span className="font-primary font-bold mix-blend-difference pointer-events-none">
            PENUP
          </span>
        )}
        {splitText.length > 1 && splitText[1]}
      </>
    );
  };

  return (
    <div className="absolute w-80 h-44 left-0 bottom-5 flex flex-col justify-between items-start pl-3 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-base font-light font-secondary relative z-[2]"
      >
        {renderTextWithPENUP(displayedText)}
      </motion.p>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-row relative z-[4] mix-blend-difference"
      >
        <a
          href="https://www.penup.com/profile/1716479051655321"
          target="_black"
          className="text-2xl hover:text-gold duration-300"
        >
          Follow me on PENUP
        </a>
      </motion.div>
    </div>
  );
};

export default CardsHeader;
