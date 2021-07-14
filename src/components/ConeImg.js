import React from "react";
import { motion } from "framer-motion";

export default function ConeImg() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <svg
      id="svg_visu"
      height="50%"
      viewBox="0 0 257 525"
      className="absolute bottom-0 left-0 right-0 mx-auto z-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_1">
        <title>Layer 1</title>
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="animate"
          fill="#FFDFB8"
          d="m12.50001,12.5l115.99999,500l115.99999,-500l-231.99999,0l0.00001,0z"
          stroke="#482816"
          strokeWidth="25"
        />
      </g>
    </svg>
  );
}
