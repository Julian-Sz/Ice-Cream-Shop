import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, MyContext } from "../App.js";
import ConeImg from "./ConeImg.js";
import CupImg from "./CupImg.js";
import { motion, AnimateSharedLayout } from "framer-motion";

export default function ChooseConeCup() {
  const { dispatch } = useContext(MyContext); //store
  useEffect(() => {
    dispatch({ type: ACTIONS.RESET, payload: undefined });
  }, [dispatch]);

  const cardStyle = {
    background: "#2c3e50",
    height: "80vh",
    gridTemplateRows: "auto 40% 40%",
  };
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 z-10 p-5 w-11/12 shadow-2xl justify-items-center auto-rows-min flex-1 mb-3"
      style={cardStyle}
    >
      <h1 className="col-span-1 md:col-span-2 text-2xl md:text-5xl md:mb-5">
        How would you like your ice?
      </h1>
      <Link
        to="ChooseKind"
        onClick={() => {
          dispatch({ type: ACTIONS.SET_CONE, payload: true });
        }}
        className="md:row-span-2 border-b-2 md:border-b-0 md:border-r-2 flex w-full justify-between items-center md:flex-col"
      >
        <h2 className="text-2xl md:text-3xl my-1 mx-4 md:my-5">Cone</h2>
        <ConeImg height="70%" />
      </Link>
      <Link
        to="ChooseKind"
        onClick={() => {
          dispatch({ type: ACTIONS.SET_CONE, payload: false });
        }}
        className="md:row-span-2 border-t-2 md:border-t-0 md:border-l-2 flex w-full justify-between items-center md:flex-col pl-2"
      >
        <h2 className="text-2xl md:text-3xl my-1 mx-4 md:my-5">Cup</h2>
        <CupImg height="70%" />
      </Link>
    </motion.div>
  );
}
