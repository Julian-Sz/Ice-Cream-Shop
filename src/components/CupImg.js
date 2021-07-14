import React from "react";
import { motion } from "framer-motion";

export default function CupImg() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    animate: {
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
      viewBox="0 0 323 476"
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
          strokeWidth="25"
          d="m12.5,12.5l55.875,450.99996l186.25001,0l55.87498,-450.99996l-297.99999,0z"
          stroke="#482816"
        />
      </g>
    </svg>
  );
}
