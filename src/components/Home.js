import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcecream from "../Images/Home-Icecream.jpg";
// import { ACTIONS, MyContext } from "../App.js";

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
    <div
      className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 flex-auto w-11/12 z-20 mb-3 shadow-2xl auto-rows-min"
      style={wrapperStyle}
    >
      <div
        className="w-full h-full flex flex-col justify-around z-30 p-5" // border-solid border-4 border-red-500
        style={leftSectionStyle}
      >
        <h1 className="text-2xl md:text-3xl">
          This is a fictional ice cream shop!
        </h1>
        <Link to="/ChooseConeCup">
          <h2 className="mx-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black text-xl md:text-3xl">
            Order an imaginary ice cream!
          </h2>
        </Link>
      </div>
      <div
        className="w-full h-full z-20" //border-solid border-4 border-green-500
        style={rightSectionStyle}
      >
        <img src={HomeIcecream} style={ImageStyle} className="h-full w-full" />
      </div>
    </div>
  );
}
