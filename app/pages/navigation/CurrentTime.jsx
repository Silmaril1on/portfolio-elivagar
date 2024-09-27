import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animationForHeader, staggerOpacity } from "@/app/framer/motionvalues";
import BorderSvg from "@/app/components/BorderSvg";
import { IoIosMail } from "react-icons/io";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  if (!currentTime) {
    return null;
  }

  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      animate="visible"
      className="flex items-start xl:items-center flex-col xl:flex-row xl:space-x-5"
    >
      <h1 className="pointer-events-none">{currentTime}</h1>
      <div className="relative hover:bg-cream hover:text-black duration-500 overflow-hidden">
        <BorderSvg />
        <a
          href="mailto:graphlev1@gmail.com"
          className="flex flex-row relative z-[5] px-1 pt-1 xl:px-4 xl:py-2 "
        >
          <motion.h1 variants={animationForHeader}>Contact ME</motion.h1>
          <IoIosMail className="ml-2 mb-1" size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default CurrentTime;
