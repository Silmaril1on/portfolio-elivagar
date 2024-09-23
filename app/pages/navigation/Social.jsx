import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationForHeader } from "@/app/framer/motionvalues";

const socialLinks = [
  {
    link: "https://www.facebook.com/graphchiqovani",
    icon: <FaFacebook />,
  },
  {
    link: "https://www.instagram.com/silmarill1on/",
    icon: <FaInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/elivagar/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://github.com/Silmaril1on",
    icon: <FaGithub />,
  },
];

const Social = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={animationForHeader}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="flex flex-row space-x-3 relative z-[3]"
      >
        {socialLinks.map((item, index) => {
          return (
            <motion.div variants={animationForHeader} key={index}>
              <Link href={item.link} target="_blank">
                <span className="text-xl duration-300 hover:text-gold">
                  {item.icon}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Social;
