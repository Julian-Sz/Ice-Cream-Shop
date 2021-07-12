import React, { useContext, useEffect } from "react";
import { VARIETIES, ACTIONS, MyContext } from "../App.js";

export default function ScoopListItem(props) {
  const { store, dispatch } = useContext(MyContext);
  console.log(props);

  const rowStyle = {
    background: props.el[1],
  };
  return (
    <div
      className="flex justify-between my-2  p-1 rounded text-white"
      style={rowStyle}
    >
      <span className="mx-2">{props.el[0]}</span>
      <button className="mx-2" onClick={() => {}}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
