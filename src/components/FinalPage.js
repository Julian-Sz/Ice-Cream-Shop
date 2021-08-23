import React from "react";
import { motion } from "framer-motion";

export default function FinalPage() {
  const finalPageVariants = {
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
      variants={finalPageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="backgroundCard w-11/12 flex-auto z-20 mb-3 shadow-2xl flex flex-col justify-around"
    >
      <h1 className="text-2xl md:text-5xl">Thank you for your order!</h1>
      <h2 className="text-xl md:text-4xl">It will get delivered soon...</h2>
    </motion.div>
  );
}
