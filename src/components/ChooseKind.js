import React, { useContext } from "react";
import { MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import Menu from "./Menu.js";
import ScoopListItem from "./ScoopListItem.js";
import Visualization from "./Visualization.js";

export default function ChooseKind() {
  const { store, dispatch } = useContext(MyContext);
  const history = useHistory();
  if (store.cone === undefined) {
    history.push("/ChooseConeCup");
  }
  return (
    <div className="flex flex-col md:flex-row justify-between w-11/12 z-10 flex-auto mb-3">
      <div
        className="bg-red-400 w-full md:w-5/12 flex-auto md:flex-none"
        // style={{ maxHeight: "20px" }}
      >
        <Visualization />
      </div>
      <div className="w-full md:w-7/12 md:pl-3 flex-1 md:flex-none">
        <div className="bg-green-400 w-full h-full"></div>
      </div>
      {/* <Menu />
      {store.scoops.map((el, index) => {
        return <ScoopListItem el={el} index={index} key={index} />;
      })} */}
    </div>
  );
}
