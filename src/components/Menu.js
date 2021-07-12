import React, { useContext, useState } from "react";
import { VARIETIES, ACTIONS, MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu() {
  const { store, dispatch } = useContext(MyContext);
  const [state, setState] = useState({
    selected: { name: undefined, color: undefined },
  });

  const btnClickHandler = (el) => {
    setState((prev) => {
      return { ...prev, selected: { name: el[0], color: el[1] } };
    });
  };

  const nextClickHandler = (el) => {
    if (state.selected.name === undefined) {
      window.alert("Please choose an option.");
    } else {
      dispatch({
        type: ACTIONS.ADD_SCOOP,
        payload: [state.selected.name, state.selected.color],
      });
    }
  };

  let containerStyle = {};
  if (state.selected.name !== undefined) {
    containerStyle = {
      background: state.selected.color,
    };
  }
  return (
    <div className="p-3 rounded shadow-md" style={containerStyle}>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-max gap-3 place-items-stretch">
        <div className="col-span-2 md:col-span-4 p-5 rounded shadow-md bg-gray-500 bg-opacity-80">
          <span className="p-1 rounded text-white text-2xl">
            {state.selected.name !== undefined
              ? state.selected.name
              : "What do you like?"}
          </span>
        </div>
        {Object.entries(VARIETIES).map((el, index) => {
          let name = el[0];
          let color = el[1];
          let btnStyle = {
            background: color,
          };
          const btnWrapperVariants = {
            initial: {
              opacity: 0.5,
              scale: 0.5,
            },
            animate: {
              opacity: 1,
              scale: 1,
            },
          };

          const btnVariants = {
            normal: { scale: 1 },
            selected: { scale: 1.2 },
          };
          return (
            <motion.div
              variants={btnWrapperVariants}
              initial="initial"
              animate="animate"
              className="rounded"
              key={index}
            >
              <motion.button
                variants={btnVariants}
                animate={state.selected.name !== name ? "normal" : "selected"}
                className="w-full h-full rounded py-3 shadow-lg"
                style={btnStyle}
                onClick={() => {
                  btnClickHandler(el);
                }}
              >
                <span className="bg-gray-500 p-1 rounded bg-opacity-80 text-white">
                  {name}
                </span>
              </motion.button>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-between my-3">
        <button className="p-3 bg-yellow-500 rounded">Cancel</button>
        <button
          className="p-3 bg-yellow-500 rounded"
          onClick={() => {
            nextClickHandler();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
