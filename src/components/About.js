import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const aboutVariants = {
    initial: {
      x: "110vw",
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      x: "-110vw",
      opacity: 0.5,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={aboutVariants}
      style={{ background: "#2c3e50" }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-11/12 z-20 mb-3 shadow-2xl flex-1 text-2xl px-5"
      id="home-grid"
    >
      <h1 className="text-3xl my-5">
        Hi, I am Julian Szigethy, the creator of this.
      </h1>
      <p className="my-5">
        I've created this project to train my skills of framer-motion, react and
        react-router.
      </p>
      <p className="my-5">
        Here is a link to my website: "currently under construction"
      </p>
    </motion.div>
  );
}
