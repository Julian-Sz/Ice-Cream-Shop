import React from "react";
import { motion } from "framer-motion";

export default function ConeImg(props) {
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

  const svgStyle = {
    height: props.height,
    maxWidth: "100%",
    maxHeight: "100%",
  };
  return (
    <motion.svg
      id="svg_visu"
      viewBox="-16 -12.5 232 417"
      // className="absolute bottom-0 left-0 right-0 mx-auto z-20"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
      className="h-full"
      // layout
      // layoutID="ConeImg"
    >
      <g id="Layer_1">
        <title>Layer 1</title>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
          fill="#FFDFB8"
          d="M0,0l100,400l100,-400L0,0l100,400"
          stroke="#482816"
          strokeWidth="25"
        />
      </g>
    </motion.svg>
  );
}
