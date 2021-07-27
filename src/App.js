// import logo from "./logo.svg";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  REMOVE_CUP: "remove-cup",
  RESET: "reset",
};

const reducer = (prev, action) => {
  let newScoops = [...prev.scoops];
  switch (action.type) {
    case ACTIONS.SET_CONE:
      return { ...prev, cone: action.payload };
    case ACTIONS.ADD_SCOOP:
      if (newScoops.length < 5) {
        newScoops.push(action.payload);
      }
      return { ...prev, scoops: newScoops };
    case ACTIONS.REMOVE_CUP:
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

  const visuContainerStyles = {
    minHeight: "570px",
  };
  return (
    <Router>
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
      <div className="App flex flex-col justify-start items-center h-screen z-10 text-center text-white">
        <MyContext.Provider value={{ store, dispatch }}>
          <Nav />
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/(ChooseKind|ChooseConeCup)/">
            {store.cone !== undefined && (
              <div
                id="visualization-container"
                className="relative w-80 mb-3"
                style={visuContainerStyles}
              >
                <Visualization />
              </div>
            )}
          </Route> */}
          <Route path="/ChooseConeCup">
            <ChooseConeCup />
          </Route>
          <Route path="/ChooseKind">
            <ChooseKind />
          </Route>
        </MyContext.Provider>
      </div>
    </Router>
  );
}

export default App;
