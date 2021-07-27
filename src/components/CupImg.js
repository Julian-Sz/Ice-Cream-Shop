import React from "react";
import { motion } from "framer-motion";

export default function CupImg(props) {
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

  const svgStyle = {
    height: props.height,
    maxWidth: "100%",
    maxHeight: "100%",
  };
  return (
    <motion.svg
      id="svg_visu"
      viewBox="-12.5 -12.5 325 525"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
      className=""
      // layout
      // layoutID="CupImg"
    >
      <g id="Layer_1">
        <title>Layer 1</title>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
          fill="#FFDFB8"
          strokeWidth="25"
          d="M0,0L70,500L230,500L300,0L0,0L70,500"
          stroke="#482816"
        />
      </g>
    </motion.svg>
  );
}
