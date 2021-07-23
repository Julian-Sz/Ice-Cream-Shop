import React, { useContext } from "react";
import { MyContext } from "../App.js";
import { useHistory } from "react-router-dom";
import Menu from "./Menu.js";
import ScoopListItem from "./ScoopListItem.js";

export default function ChooseKind() {
  const { store, dispatch } = useContext(MyContext);
  const history = useHistory();
  if (store.cone === undefined) {
    history.push("/ChooseConeCup");
  }
  return (
    <div className="flex flex-col md:w-6/12 w-9/12 z-10">
      <Menu />
      {store.scoops.map((el, index) => {
        return <ScoopListItem el={el} index={index} key={index} />;
      })}
    </div>
  );
}
