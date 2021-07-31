import React from "react";
// import { MyContext } from "../App.js";

export default function ScoopVisu(props) {
  // const { store } = useContext(MyContext);
  const scoopStyle = {
    border: "3px solid black",
    borderRadius: "50%",
    background: props.el[1],
    height: props.diameter,
    width: props.diameter,
    zIndex: props.zindex,
    right: props.posx - props.diameter / 2,
    bottom: props.posy - props.diameter / 2,
  };
  return <div className="absolute" style={scoopStyle}></div>;
}
