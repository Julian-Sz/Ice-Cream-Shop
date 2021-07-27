import React, { useContext } from "react";
import { ACTIONS, MyContext } from "../App.js";

export default function ScoopListItem(props) {
  const { dispatch } = useContext(MyContext);

  const rowStyle = {
    borderTop: "3px solid gray",
    borderBottom: "3px solid gray",
  };

  const colorWindowStyle = {
    background: props.el[1],
  };

  const spanStyle = {
    minWidth: "160px",
  };
  return (
    <div
      className="flex justify-between my-2 p-1 rounded bg-gray-100 hover:bg-white text-black"
      style={rowStyle}
    >
      <span style={spanStyle}>
        <span className="mx-2 rounded px-2 float-left">{props.index + 1}.</span>
        <span className="mx-2 rounded p-2">{props.el[0]}</span>
      </span>
      <div className="mx-2 rounded flex-auto" style={colorWindowStyle}></div>
      <button
        className="mx-2"
        onClick={() => {
          dispatch({ type: ACTIONS.REMOVE_CUP, payload: props.index });
        }}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
