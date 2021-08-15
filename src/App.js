// import logo from "./logo.svg";
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ChooseConeCup from "./components/ChooseConeCup";
import ChooseKind from "./components/ChooseKind";
import CheckOrder from "./components/CheckOrder";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export const VARIETIES = {
  Vanilla: "#FAE074",
  Chocolate: "#995E38",
  Strawberry: "#FA5527",
  Blueberry: "#5F66F5",
  Pistachio: "#9EF3B3",
  Stracciatella:
    "repeating-linear-gradient(45deg, #FFFFFF 39%, #593821 40%, #FFFFFF 41%, #FFFFFF 60%)",
  Wildberry: "#C48BF0",
  Coffee: "#CE9A5F",
};

export const ACTIONS = {
  SET_CONE: "change-cone",
  ADD_SCOOP: "add-scoop",
  REMOVE_SCOOP: "remove-scoop",
  RESET: "reset",
};

export const MAX_SCOOPS = 6; //ATTENTION: If this changes to a number higher than 6, the positions in the Visualization component must be adjusted.

const reducer = (prev, action) => {
  let newScoops = [...prev.scoops];
  // console.log("action dispatched", action);
  switch (action.type) {
    case ACTIONS.SET_CONE:
      return { ...prev, cone: action.payload };
    case ACTIONS.ADD_SCOOP:
      let arr = [...action.payload];
      arr.push(prev.individualScoopIndex);
      if (newScoops.length < MAX_SCOOPS) {
        newScoops.push(arr);
      }
      return {
        ...prev,
        scoops: newScoops,
        individualScoopIndex: prev.individualScoopIndex + 1,
      };
    case ACTIONS.REMOVE_SCOOP:
      console.log("removed scoop", action.payload);
      newScoops.splice(action.payload, 1);
      return { ...prev, scoops: newScoops };
    case ACTIONS.RESET:
      return { ...prev, scoops: [], cone: undefined };
    default:
      return prev;
  }
};

export const MyContext = React.createContext();

function App() {
  const [store, dispatch] = useReducer(reducer, {
    cone: undefined,
    scoops: [],
    individualScoopIndex: 0,
  });

  const AppClasses =
    "App flex flex-col justify-start items-center z-10 text-center text-white min-h-screen";

  return (
    <BrowserRouter>
      <div id="background-circles" className="z-0">
        <div
          id="bg-circle1"
          className="rounded-full absolute bottom-0 left-0"
        ></div>
        <div
          id="bg-circle2"
          className="rounded-full absolute top-2 right-10"
        ></div>
      </div>
      <div className={AppClasses}>
        <MyContext.Provider value={{ store, dispatch }}>
          <Nav />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ChooseConeCup">
            <ChooseConeCup />
          </Route>
          <Route path="/ChooseKind">
            <ChooseKind />
          </Route>
          <Route path="/CheckOrder">
            <CheckOrder />
          </Route>
        </MyContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
