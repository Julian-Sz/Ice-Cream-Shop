import React, { useContext } from "react";
import { MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import Visualization from "./Visualization.js";
import { MAX_SCOOPS } from "../App.js";
import Scoop from "./Scoop.js";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function ChooseKind() {
  const { store } = useContext(MyContext);
  const scoopsToRender = [...store.scoops];
  if (scoopsToRender.length < MAX_SCOOPS) {
    scoopsToRender.unshift(undefined);
  }
  const history = useHistory();
  if (store.cone === undefined) {
    history.push("/ChooseConeCup");
  }

  const chooseKindVariants = {
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
      variants={chooseKindVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col md:flex-row md:mb-3 justify-between w-11/12 z-10 flex-auto"
    >
      <div
        id="visuContainer"
        className="md:w-5/12 flex justify-center relative"
      >
        <Visualization />
      </div>
      <div className="w-full md:w-7/12 pt-3 md:pt-0 md:pl-3 flex-1 md:flex-none flex flex-col items-stretch">
        <AnimateSharedLayout>
          {store.scoops.length >= MAX_SCOOPS && (
            <motion.h1
              layoutID="MenuBox"
              className="mb-3 p-2 font-bold bg-red-700 text-xl shadow-2xl"
            >
              Maximum number of scoops reached,
              <br /> enjoy your big ice!
            </motion.h1>
          )}
          <AnimatePresence>
            {scoopsToRender.map((el, index) => {
              if (el === undefined) {
                return <Scoop el={el} index={index} key={"Menu"}></Scoop>;
              } else {
                return <Scoop el={el} index={index} key={el[2]}></Scoop>;
              }
            })}
          </AnimatePresence>
        </AnimateSharedLayout>
        {store.scoops.length > 0 && (
          <button
            className="mt-auto px-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black mb-3 md:mb-0"
            onClick={() => {
              history.push("/CheckOrder");
            }}
          >
            Continue
          </button>
        )}
      </div>
    </motion.div>
  );
}
