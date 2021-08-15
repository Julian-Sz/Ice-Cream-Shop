import React, { useContext } from "react";
import { ACTIONS, MyContext } from "../App.js";
import { motion } from "framer-motion";

export default function ScoopListItem(props) {
  const { dispatch } = useContext(MyContext);

  const colorWindowStyle = {
    background: props.el[1],
  };
  let wrapperClasses =
    "flex-initial justify-self-start backgroundCard hover:bg-gray-600 mb-3 flex justify-between px-3 shadow-2xl";

  if (props.checkorder) {
    wrapperClasses =
      "flex-initial justify-self-start bg-gray-900 hover:bg-gray-600 mb-3 flex justify-between px-3 shadow-2xl";
  }
  return (
    <motion.div
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.5 }}
      layout
      className={wrapperClasses}
    >
      <h2>{props.el[0]}</h2>
      <button
        className="ml-auto mr-2 my-1 rounded flex hover:cursor-default"
        onClick={() => {}}
      >
        <div
          className="w-16 md:w-28 ml-auto mr-5 rounded h-full"
          style={colorWindowStyle}
        ></div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg> */}
      </button>
      <button
        className="mx-2"
        onClick={() => {
          dispatch({ type: ACTIONS.REMOVE_SCOOP, payload: props.index - 1 });
        }}
      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </motion.div>
  );
}
