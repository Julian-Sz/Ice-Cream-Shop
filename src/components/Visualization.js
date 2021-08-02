import React, { useContext } from "react";
import { ACTIONS, MyContext } from "../App.js";
import CupImg from "./CupImg";
import ConeImg from "./ConeImg";
import ScoopVisu from "./ScoopVisu";

export default function Visualization() {
  const { store, dispatch } = useContext(MyContext);
  const XPOSITIONS = [];
  const YPOSITIONS = [];
  const ZINDEXES = [];
  let diameter = 130;

  const visuContainer = document.getElementById("visualization-container");

  if (visuContainer !== null) {
    const visuHeight = visuContainer.getBoundingClientRect().height;
    const visuWidth = visuContainer.getBoundingClientRect().width;
    // if (store.scoops.length === 1) {
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 2);
    //   ZINDEXES.push(0);
    //   diameter = 200;
    // } else if (store.scoops.length === 2) {
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 3);
    //   ZINDEXES.push(0);
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push((2 * visuWidth) / 3);
    //   ZINDEXES.push(1);
    // } else if (store.scoops.length === 3) {
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 3);
    //   ZINDEXES.push(1);
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push((2 * visuWidth) / 3);
    //   ZINDEXES.push(1);
    //   YPOSITIONS.push(80 + visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 2);
    //   ZINDEXES.push(0);
    // } else if (store.scoops.length === 4) {
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 3);
    //   ZINDEXES.push(2);
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push((2 * visuWidth) / 3);
    //   ZINDEXES.push(2);
    //   YPOSITIONS.push(50 + visuHeight / 2);
    //   XPOSITIONS.push((1.2 * visuWidth) / 3);
    //   ZINDEXES.push(1);
    //   YPOSITIONS.push(50 + visuHeight / 2);
    //   XPOSITIONS.push((1.8 * visuWidth) / 3);
    //   ZINDEXES.push(0);
    // } else if (store.scoops.length === 5) {
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 3);
    //   ZINDEXES.push(2);
    //   YPOSITIONS.push(visuHeight / 2);
    //   XPOSITIONS.push((2 * visuWidth) / 3);
    //   ZINDEXES.push(2);
    //   YPOSITIONS.push(50 + visuHeight / 2);
    //   XPOSITIONS.push((1.2 * visuWidth) / 3);
    //   ZINDEXES.push(1);
    //   YPOSITIONS.push(50 + visuHeight / 2);
    //   XPOSITIONS.push((1.8 * visuWidth) / 3);
    //   ZINDEXES.push(1);
    //   YPOSITIONS.push(110 + visuHeight / 2);
    //   XPOSITIONS.push(visuWidth / 2);
    //   ZINDEXES.push(0);
  }

  return (
    <>
      {store.scoops.map((el, index) => {
        return (
          <ScoopVisu
            key={index}
            posx={XPOSITIONS[index]}
            posy={YPOSITIONS[index]}
            zindex={ZINDEXES[index]}
            diameter={diameter}
            el={el}
          />
        );
      })}
      <div className="h-3/6 flex justify-center">
        {store.cone ? <ConeImg /> : <CupImg />}
      </div>
    </>
  );
}
