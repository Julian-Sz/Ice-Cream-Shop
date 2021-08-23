import React, { useContext } from "react";
import { MyContext } from "../App.js";
import Visualization from "./Visualization.js";
import { useHistory, Link } from "react-router-dom";
import ScoopListItem from "./ScoopListItem.js";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckOrder() {
  const { store } = useContext(MyContext);

  const history = useHistory();
  console.log("store", store);
  if (store.cone === undefined || store.scoops.length === 0) {
    history.push("/ChooseConeCup");
  }

  const checkOrderVariants = {
    initial: {
      x: "110vw",
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      x: "-110vw",
      opacity: 0.5,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={checkOrderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-auto w-11/12 mb-3 backgroundCard z-20 flex flex-col py-8 relative"
    >
      <h1 className="text-2xl md:text-5xl md:pl-4 md:mb-8 absolute top-10 right-0 left-0 mx-auto">
        Please check your order:
      </h1>
      <div id="visuContainer" className="w-4/12 self-center grid relative">
        {store !== undefined && <Visualization />}
      </div>
      <div className="w-11/12 md:w-8/12 self-center mt-5">
        <AnimatePresence>
          {store.scoops.map((el, index) => {
            return (
              <ScoopListItem
                key={el[2]}
                el={el}
                index={index}
                checkorder={true}
              ></ScoopListItem>
            );
          })}
        </AnimatePresence>
      </div>
      <Link
        to="/FinalPage"
        className="w-11/12 md:w-min self-center md:self-end md:mr-8 mt-auto flex justify-end"
      >
        <button className="text-4xl px-3 py-2 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black flex items-center justify-around">
          <span className="mr-3">Order</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </button>
      </Link>
    </motion.div>
  );
}
