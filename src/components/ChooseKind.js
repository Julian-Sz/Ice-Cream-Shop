import React, { useContext, useState } from "react";
import { MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import Visualization from "./Visualization.js";
import { MAX_SCOOPS } from "../App.js";
import Scoop from "./Scoop.js";
import { AnimatePresence } from "framer-motion";

export default function ChooseKind() {
  const { store, dispatch } = useContext(MyContext);
  const scoopsToRender = [...store.scoops];
  if (scoopsToRender.length < MAX_SCOOPS) {
    scoopsToRender.unshift(undefined);
  }
  const history = useHistory();
  if (store.cone === undefined) {
    history.push("/ChooseConeCup");
  }
  console.log("scoopsToRender: " + scoopsToRender);
  console.log("scoops in store", store.scoops);
  return (
    <div className="flex flex-col md:flex-row md:mb-3 justify-between w-11/12 z-10 flex-auto">
      <div
        id="visuContainer"
        className="bg-red-400 md:w-5/12 flex flex-col relative"
      >
        <Visualization />
      </div>
      <div className="w-full md:w-7/12 pt-3 md:pt-0 md:pl-3 flex-1 md:flex-none flex flex-col items-stretch">
        {store.scoops.length >= MAX_SCOOPS && (
          <h1 className="mb-3 p-2 font-bold bg-red-700 text-xl shadow-2xl">
            Maximum number of scoops reached,
            <br /> enjoy your big ice!
          </h1>
        )}
        <AnimatePresence>
          {scoopsToRender.map((el, index) => {
            return <Scoop el={el} index={index} key={index}></Scoop>;
          })}
        </AnimatePresence>
        {store.scoops.length > 0 && (
          <button className="mt-auto px-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black mb-3 md:mb-0">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
