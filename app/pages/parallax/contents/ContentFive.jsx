import { FaReact, FaSass, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux, SiMongodb } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import {
  infinityScroll,
  reverseInfinityScroll,
} from "@/app/framer/motionvalues";
import BorderSvg from "@/app/components/BorderSvg";

const data = [
  {
    name: "react.js",
    icon: <FaReact />,
  },
  {
    name: "next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "CSS / SASS",
    icon: <FaSass />,
  },
  {
    name: "javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "firebase",
    icon: <IoLogoFirebase />,
  },
  {
    name: "typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "framer motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "Node.js",
    icon: <FaNode />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

export const ContentFive = () => {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-150px" }}
        className="w-full overflow-hidden relative rotate-6"
      >
        <BorderSvg />
        <div className="flex flex-row w-max h-full items-center">
          <motion.div
            variants={infinityScroll}
            initial="hidden"
            animate="visible"
            className="flex items-center bg-black h-full"
          >
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="center px-4 py-2 xl:py-4 xl:px-7 space-x-2 flex-row text-lg xl:text-3xl hover:bg-cream hover:text-black duration-500 h-full  capitalize  hover:cursor-default"
                >
                  <span>{item.icon}</span>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={infinityScroll}
            initial="hidden"
            animate="visible"
            className="flex items-center bg-black h-full"
          >
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="center px-4 py-2 xl:py-4 xl:px-7 space-x-2 flex-row text-lg xl:text-3xl hover:bg-cream hover:text-black duration-500 h-full  capitalize  hover:cursor-default"
                >
                  <span>{item.icon}</span>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
      <Duplicate />
    </main>
  );
};

const Duplicate = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ margin: "-150px" }}
      className="w-full overflow-hidden relative -rotate-12"
    >
      <BorderSvg />
      <div className="flex flex-row w-max h-full items-center">
        <motion.div
          variants={reverseInfinityScroll}
          initial="hidden"
          animate="visible"
          className="flex items-center bg-black h-full"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="center px-4 py-2 xl:py-4 xl:px-7 space-x-2 flex-row text-lg xl:text-3xl hover:bg-cream hover:text-black duration-500 h-full  capitalize  hover:cursor-default"
              >
                <span>{item.icon}</span>
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={reverseInfinityScroll}
          initial="hidden"
          animate="visible"
          className="flex items-center bg-black h-full"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="center px-4 py-2 xl:py-4 xl:px-7 space-x-2 flex-row text-lg xl:text-3xl hover:bg-cream hover:text-black duration-500 h-full  capitalize  hover:cursor-default"
              >
                <span>{item.icon}</span>
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
