import HoverContainer from "@/app/components/HoverContainer";
import { animationForHeader } from "@/app/framer/motionvalues";
import { motion } from "framer-motion";

const ContentThree = () => {
  return (
    <HoverContainer className="ml-auto w-[300px] relative p-3 xl:mr-[7%]">
      <h1 className="font-secondary text-md xl:text-lg relative z-[5] pointer-events-none font-light">
        I'm a
        <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text px-1 text-lg xl:text-2xl"
        >
          react
        </motion.span>
        developer with a love for creating engaging, dynamic user experiences. I
        specialize in crafting sleek animations using
        <motion.span
          variants={animationForHeader}
          initial="hidden"
          whileInView="visible"
          className="gold-text  px-1 text-lg xl:text-2xl"
        >
          framer motion
        </motion.span>
        , bringing web interfaces to life with smooth, interactive designs.
      </h1>
    </HoverContainer>
  );
};

export default ContentThree;
