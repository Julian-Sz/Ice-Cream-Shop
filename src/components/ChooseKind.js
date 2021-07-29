import React, { useContext, useState } from "react";
import { MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import Menu from "./Menu.js";
import ScoopListItem from "./ScoopListItem.js";
import Visualization from "./Visualization.js";

export default function ChooseKind() {
  const { store, dispatch } = useContext(MyContext);
  const [state, setState] = useState({ menuOpened: true });
  const history = useHistory();
  if (store.cone === undefined) {
    history.push("/ChooseConeCup");
  }
  return (
    <div className="flex flex-col md:flex-row justify-between w-11/12 z-10 flex-auto mb-3">
      <div
        className="bg-red-400 md:w-5/12 flex-auto md:flex-none"
        // style={{ height: "60vh" }}
      >
        <div
          className="bg-green-400"
          style={{ height: "90px", width: "200px" }}
        >
          Some Content
        </div>
        {/*{" "}
        <Visualization /> */}
      </div>
      <div className="w-full md:w-7/12 md:pl-3 flex-1 md:flex-none flex flex-col items-stretch">
        {state.menuOpened && <Menu />}
        {store.scoops.map((el, index) => {
          return <ScoopListItem el={el} index={index} key={index} />;
        })}
        {store.scoops.length > 0 && (
          <button className="mt-auto px-3 py-1 rounded border-4 shadow-2xl hover:bg-gray-200 hover:text-black">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
