import React from "react";
import { Link } from "react-router-dom";
import HomeIcecream from "../Images/Home-Icecream.jpg";
// import { ACTIONS, MyContext } from "../App.js";
import { motion } from "framer-motion";

export default function Home() {
  // const { dispatch } = useContext(MyContext);
  const ImageStyle = {
    backgroundImage: `url(${HomeIcecream})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const leftSectionStyle = {
    background: "#2c3e50",
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 w-11/12 z-20 mb-3 shadow-2xl flex-1 auto-rows-fr"
      id="home-grid"
    >
      <div
        className="flex flex-col justify-around z-30 p-5"
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
      <div className="z-20 p-5" style={ImageStyle}></div>
    </motion.div>
  );
}
