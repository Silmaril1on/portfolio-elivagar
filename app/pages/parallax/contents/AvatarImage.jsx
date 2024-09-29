import { motion } from "framer-motion";
import Image from "next/image";

const AvatarImage = () => {
  return (
    <div className="relative bg-black/40">
      <Image
        className="h-full w-full relative z-[2]"
        src="/assets/2.png"
        width={600}
        height={600}
        quality={100}
        alt="elivagar"
      />
      <motion.div
        initial={{ zIndex: 1 }}
        whileInView={{ zIndex: 3 }}
        viewport={{ margin: "-500px", once: false }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          className="absolute inset-0"
          src="/assets/1.png"
          width={600}
          height={600}
          quality={100}
          alt="elivagar"
        />
      </motion.div>
    </div>
  );
};

export default AvatarImage;
