"use client";
import { motion } from "framer-motion";
import Navigation from "../navigation/Navigation";
import Parallax from "../parallax/Parallax";
import Projects from "../projects/Projects";
import Painting from "../painting/Painting";
import Footer from "../footer/Footer";

const MainPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="center flex-col relative w-full max-w-[1800px]"
    >
      <Navigation />
      <Parallax />
      <Projects />
      <Painting />
      <Footer />
    </motion.section>
  );
};

export default MainPage;
