import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, MyContext } from "../App.js";

export default function Home() {
  const { dispatch } = useContext(MyContext);

  return (
    <div className="">
      <h1 className="p-10 text-4xl">Order an ice cream here!</h1>
      <Link to="/ChooseConeCup">
        <button className="p-4 bg-yellow-500 rounded hover:bg-green-500 text-2xl">
          Start
        </button>
      </Link>
    </div>
  );
}
