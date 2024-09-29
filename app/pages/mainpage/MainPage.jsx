"use client";
import { motion } from "framer-motion";
import Navigation from "../navigation/Navigation";
import Parallax from "../parallax/Parallax";
import Projects from "../projects/Projects";
import Painting from "../painting/Painting";
import Footer from "../footer/Footer";
import Modal from "@/app/components/Modal";
import { useState } from "react";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="center flex-col relative w-full max-w-[1800px]"
    >
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Navigation />
      <Parallax />
      <Projects />
      <Painting />
      <Footer />
    </motion.section>
  );
};

export default MainPage;
