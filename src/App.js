// import logo from "./logo.svg";
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ChooseConeCup from "./components/ChooseConeCup";
import ChooseKind from "./components/ChooseKind";
import Visualization from "./components/Visualization";
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
      if (newScoops.length < MAX_SCOOPS) {
        newScoops.push(action.payload);
      }
      return { ...prev, scoops: newScoops };
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
  });

  const AppClasses =
    "App flex flex-col justify-start items-center z-10 text-center text-white min-h-screen";

  // const location = useLocation();
  // console.log(location.pathname);

  // const [AppClasses, setAppClasses] = useState(
  //   "App flex flex-col justify-start items-center z-10 text-center text-white h-screen"
  // );

  // useEffect(() => {
  //   console.log("useEffect ran");
  //   if (location.pathname === "/ChooseKind") {
  //     setAppClasses(
  //       "App flex flex-col justify-start items-center z-10 text-center text-white min-h-screen"
  //     );
  //   }
  // }, [location]);

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
        </MyContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
