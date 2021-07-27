import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, MyContext } from "../App.js";

export default function Nav(props) {
  const { dispatch } = useContext(MyContext);

  const liClasses =
    "px-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black";

  const navWrapperStyle = {
    background: "#2c3e50",
  };
  return (
    <ul
      className="flex flex-row justify-between w-11/12 z-20 p-5 my-3 shadow-2xl text-xl md:text-3xl"
      style={navWrapperStyle}
    >
      <Link
        to="/"
        onClick={() => {
          dispatch({ type: ACTIONS.RESET, payload: undefined });
        }}
      >
        <li className={liClasses}>Home</li>
      </Link>
      <li className={liClasses}>About</li>
    </ul>
  );
}
