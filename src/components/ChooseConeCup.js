import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, MyContext } from "../App.js";

export default function ChooseConeCup() {
  const { dispatch } = useContext(MyContext); //store
  useEffect(() => {
    dispatch({ type: ACTIONS.RESET, payload: undefined });
  }, [dispatch]);

  return (
    <div className="w-6/12 z-10">
      <h2>How would you like your ice?</h2>

      {/* <Link to="/ChooseKind"> */}
      <div className="flex flex-col">
        <Link to="ChooseKind" className="mb-3">
          <button
            className="p-3 bg-yellow-500 rounded w-full"
            onClick={() => {
              dispatch({ type: ACTIONS.SET_CONE, payload: false });
            }}
          >
            Cup
          </button>
        </Link>
        <Link to="ChooseKind">
          <button
            className="p-3 bg-yellow-500 rounded w-full"
            onClick={() => {
              dispatch({ type: ACTIONS.SET_CONE, payload: true });
            }}
          >
            Cone
          </button>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
}
