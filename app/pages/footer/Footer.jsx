import { staggerOpacity } from "@/app/framer/motionvalues";
import { motion } from "framer-motion";
import Smoke from "./Smoke";

const Footer = () => {
  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      className="h-screen w-full center flex-col font-secondary relative z-[3]"
    >
      <motion.article variants={staggerOpacity}>
        <h1 className="opacity-35 pointer-events-none text-xl font-light center">
          <span className="text-sm mr-2"> ©</span> 2024
        </h1>
        <a
          href="https://www.linkedin.com/in/elivagar/"
          target="_blank"
          className="opacity-75 hover:opacity-100 duration-500 "
        >
          linkedin.com/in/elivagar
        </a>
      </motion.article>
      <motion.article
        variants={staggerOpacity}
        className="mt-[5%] flex flex-row poin [&>span]:opacity-35 [&>span]:duration-300 [&>span]:mx-2 font-tetriary [&>span]:cursor-pointer"
      >
        <h1 className="opacity-35 pointer-events-none">Built in</h1>
        <span className="hover:text-[#05def2] hover:opacity-100">REACT</span>
        <h1 className="opacity-35 pointer-events-none">& Animated using</h1>
        <span className=" hover:text-[#f205e6] hover:opacity-100">
          FRAMER MOTION
        </span>
      </motion.article>
      <Smoke />
    </motion.div>
  );
};

export default Footer;
