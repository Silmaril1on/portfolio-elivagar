import { motion } from "framer-motion";
import BorderSvg from "./BorderSvg";
import HeaderAnimation from "./HeaderAnimation";
import { IoMdClose } from "react-icons/io";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="block xl:hidden w-full h-screen bg-black/30 backdrop-blur-sm center fixed inset-0 z-10">
      <div className="relative w-[320px] bg-black h-64 center flex-col">
        <div className="w-10 h-10 center absolute top-4 right-2 z-10">
          <IoMdClose
            onClick={() => setIsOpen(false)}
            className="text-3xl hover:text-xl duration-500 cursor-pointer"
          />
        </div>
        <BorderSvg />
        <div className="pl-3">
          <HeaderAnimation
            text="hello user"
            className="text-5xl uppercase text-gold"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="center flex-col"
        >
          <p className="font-lg">Desktop Experience Recommended</p>
          <p className="text-center px-3 font-secondary opacity-90 text-[10px]">
            This website is designed for a full desktop experience, including
            advanced scroll animations and parallax effects. For the best view,
            please visit on a larger screen.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
