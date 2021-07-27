import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcecream from "../Images/Home-Icecream.jpg";
// import { ACTIONS, MyContext } from "../App.js";
import { motion } from "framer-motion";

export default function Home() {
  // const { dispatch } = useContext(MyContext);
  const ImageStyle = {
    objectFit: "cover",
  };

  const leftSectionStyle = {
    background: "#2c3e50",
  };
  const rightSectionStyle = {};
  const wrapperStyle = {
    maxHeight: "80vh",
  };
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 flex-1 w-11/12 z-20 mb-3 shadow-2xl auto-rows-fr justify-items-stretch items-stretch"
      style={wrapperStyle}
      // initial={{ x: 400 }}
      // animate={{ x: 0 }}
      // exit={{ x: -400 }}
    >
      <div
        className="w-full h-full flex flex-col justify-around z-30 p-5" // border-solid border-4 border-red-500
        style={leftSectionStyle}
      >
        <h1 className="text-2xl md:text-3xl">
          This is a fictional ice cream shop!
        </h1>
        <Link to="/ChooseConeCup">
          <h2 className="mx-3 py-1 px-2 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black text-xl md:text-3xl">
            Order an imaginary ice cream!
          </h2>
        </Link>
      </div>
      <div
        className="w-full h-full z-20" //border-solid border-4 border-green-500
        style={rightSectionStyle}
      >
        <img
          src={HomeIcecream}
          style={ImageStyle}
          className="h-full w-full"
          alt="An ice cream"
        />
      </div>
    </motion.div>
  );
}
