"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import projectsData from "@/app/db/projectsData";
import Header from "./Header";
import ProjectImages from "./ProjectImages";

const ProjectList = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateYValues = projectsData.map(() =>
    useTransform(scrollYProgress, [0, 30], [0, -200])
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, index) => {
      const btnRef = btnRefs.current[index];
      if (btnRef && btnRef.spanRef) {
        const { left, top, width, height } = btnRef.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        const posX = (mouseX / width) * 100;
        const posY = (mouseY / height) * 100;
        btnRef.spanRef.style.left = `${posX}%`;
        btnRef.spanRef.style.top = `${posY}%`;
      }
    };

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };

    btnRefs.current.forEach((btnRef, index) => {
      if (btnRef) {
        btnRef.addEventListener("mousemove", (e) => handleMouseMove(e, index));
        btnRef.addEventListener("mouseenter", () => handleMouseEnter(index));
        btnRef.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      btnRefs.current.forEach((btnRef) => {
        if (btnRef) {
          btnRef.removeEventListener("mousemove", (e) =>
            handleMouseMove(e, index)
          );
          btnRef.removeEventListener("mouseenter", () =>
            handleMouseEnter(index)
          );
          btnRef.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <div ref={ref} className="h-[3900px] center flex-col w-full">
      {projectsData.map((item, index) => {
        return (
          <motion.div
            key={index}
            ref={(el) => (btnRefs.current[index] = el)}
            style={{ y: translateYValues[index] }}
            className="w-[78%] xl:w-[50%] sticky h-[500px] top-[200px] bg-neutral-800 rounded-t-xl overflow-hidden cursor-none"
          >
            <a href={item.link} className="cursor-none" target="_blank">
              <Header item={item} />
              <ProjectImages item={item} />
              {hoveredIndex === index && (
                <span
                  ref={(spanEl) => (btnRefs.current[index].spanRef = spanEl)}
                  className="absolute pointer-events-none h-20 w-20 rounded-full text-black text-center center bg-cream/30 top-1/2 left-1/2 uppercase -translate-x-1/2 z-10 -translate-y-1/2"
                >
                  {" "}
                  view <br /> project
                </span>
              )}
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectList;
