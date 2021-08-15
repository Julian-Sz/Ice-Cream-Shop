import React, { useContext, useState } from "react";
import { VARIETIES, ACTIONS, MyContext } from "../App.js";
// import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu() {
  const { dispatch } = useContext(MyContext);
  const [state, setState] = useState({
    selected: { name: undefined, color: undefined },
  });

  return (
    <motion.div
      layoutID="MenuBox"
      className="bg-blue-500 flex-initial mb-3 z-10"
    >
      <div className="">
        <h1 className="text-3xl">Add a scoop:</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {Object.entries(VARIETIES).map((el, index) => {
          let name = el[0];
          let color = el[1];
          return (
            <motion.div
              whileHover={{ borderRadius: "20px" }}
              className="flex flex-col justify-end m-1 shadow-2xl"
              style={{ background: color, minHeight: "90px" }}
              key={name}
              onClick={() => {
                dispatch({
                  type: ACTIONS.ADD_SCOOP,
                  payload: [name, color],
                });
              }}
            >
              <span
                className=""
                style={{
                  background: "rgba(99, 110, 114, 0.7)",
                  borderBottomRightRadius: "inherit",
                  borderBottomLeftRadius: "inherit",
                }}
              >
                {name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
