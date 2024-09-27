import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ setLoadTime }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 30);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setLoadTime(false);
      }, 700);
      setIsVisible(false);
    }
  }, [count, setLoadTime]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="w-full h-screen bg-black center relative overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[250px] xl:text-[450px] leading-[350px] absolute left-0 -bottom-14">
            {count}...
          </h1>

          <motion.div className="w-full h-4 overflow-hidden absolute top-10">
            <motion.div
              className="h-full bg-cream"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Loading;
