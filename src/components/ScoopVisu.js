import React from "react";
// import { MyContext } from "../App.js";
import { motion } from "framer-motion";

export default function ScoopVisu(props) {
  // const { store } = useContext(MyContext);
  const scoopStyle = {
    border: "3px solid black",
    borderRadius: "50%",
    background: props.el[1],
    height: props.diameter,
    width: props.diameter,
    zIndex: props.zindex,
    left: props.posx - props.diameter / 2,
    top: props.posy - props.diameter / 2,
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      layout
      className="absolute"
      style={scoopStyle}
    ></motion.div>
  );
}
