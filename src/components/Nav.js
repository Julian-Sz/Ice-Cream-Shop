import React from "react";
import { NavLink } from "react-router-dom";
// import { ACTIONS, MyContext } from "../App.js";

export default function Nav(props) {
  // const { dispatch } = useContext(MyContext);

  const liClasses =
    "px-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black";

  return (
    <ul className="flex flex-row justify-between w-11/12 z-20 p-5 my-3 shadow-2xl text-xl md:text-3xl backgroundCard">
      <NavLink activeClassName={"activeNav"} to="/" exact>
        <li className={liClasses}>Home</li>
      </NavLink>
      <NavLink activeClassName={"activeNav"} to="/about">
        <li className={liClasses}>About</li>
      </NavLink>
    </ul>
  );
}
