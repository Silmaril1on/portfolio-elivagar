"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Social from "./Social";
import CurrentTime from "./CurrentTime";
import BorderSvg from "@/app/components/BorderSvg";
import Circle from "./Circle";

const Navigation = () => {
  const [isStuck, setIsStuck] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsStuck(true);
    } else {
      setIsStuck(false);
    }
  });

  return (
    <nav
      className={`${
        isStuck ? "w-full py-5" : "w-[90%] py-6"
      } flex flex-row items-center justify-between bg-black backdrop-blur-lg mt-10 sticky px-10 top-0 z-[5] duration-300`}
    >
      {!isStuck && <BorderSvg />}
      <CurrentTime />
      <Social />
      {isStuck && <Circle />}
    </nav>
  );
};

export default Navigation;
