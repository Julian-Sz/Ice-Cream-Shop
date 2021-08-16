import React, { useContext } from "react";
import { VARIETIES, ACTIONS, MyContext } from "../App.js";
import { motion } from "framer-motion";

export default function Menu() {
  const { dispatch } = useContext(MyContext);

  return (
    <motion.div
      layoutID="MenuBox"
      className="backgroundCard p-3 flex-initial mb-3 z-10"
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
