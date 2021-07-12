import React, { useContext } from "react";
import { VARIETIES, ACTIONS, MyContext } from "../App.js";
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
    <div className="flex flex-col md:w-6/12 w-9/12">
      {store.scoops.map((el, index) => {
        return <ScoopListItem el={el} index={index} key={index} />;
      })}
      <Menu />
    </div>
  );
}

{
  /* {Object.entries(VARIETIES).map((el, index) => {
        let name = el[0];
        let color = el[1];
        let style = {
          background: color,
        };
        return (
          <li
            key={index}
            className="p-5 m-2 rounded flex-1 cursor-pointer list-none"
            style={style}
            onClick={() => {
              dispatch({ type: ACTIONS.ADD_SCOOP, payload: [name, color] });
            }}
          >
            <span className="p-2 bg-gray-700 rounded text-white text-3xl hover:bg-purple-800">
              {name}
            </span>
          </li>
        );
      })} */
}
