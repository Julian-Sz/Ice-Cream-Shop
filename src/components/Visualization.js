import React, { useContext, useState, useEffect } from "react";
import { ACTIONS, MyContext } from "../App.js";
import CupImg from "./CupImg";
import ConeImg from "./ConeImg";
import ScoopVisu from "./ScoopVisu";
import { motion, AnimatePresence } from "framer-motion";

export default function Visualization() {
  const { store, dispatch } = useContext(MyContext);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  class Scoop {
    constructor(x, y, zIndex) {
      this.x = x;
      this.y = y;
      this.zIndex = zIndex;
    }
  }

  const ScoopVisuArr = [];
  let diameter = 130;

  const visuContainer = document.getElementById("visuContainer");
  const svg = document.getElementById("svg_visu");
  // console.log("visu got rerendered", visuContainer);
  if (visuContainer !== null && svg !== null) {
    const visuHeight = visuContainer.getBoundingClientRect().height;
    const visuWidth = visuContainer.getBoundingClientRect().width;
    const svgHeight = svg.getBoundingClientRect().height;
    const svgWidth = svg.getBoundingClientRect().width;
    diameter = svgWidth / 2;
    let s1, s2, s3, s4, s5, s6;
    switch (store.scoops.length) {
      case 1:
        s1 = new Scoop(visuWidth / 2, visuHeight / 2, 0);
        ScoopVisuArr.push(s1);
        diameter = svgWidth - 10;
        break;
      case 2:
        s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 1);
        s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 0);
        diameter = (1.1 * svgWidth) / 2;
        ScoopVisuArr.push(s1, s2);
        break;
      case 3:
        diameter = (1.1 * svgWidth) / 2;
        s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 2);
        s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 1);
        s3 = new Scoop(visuWidth / 2, visuHeight / 2 - diameter / 2, 0);
        ScoopVisuArr.push(s1, s2, s3);
        break;
      case 4:
        diameter = (1.1 * svgWidth) / 2;
        s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 2);
        s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 1);
        s3 = new Scoop(
          visuWidth / 2 - svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          0
        );
        s4 = new Scoop(
          visuWidth / 2 + svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          0
        );
        ScoopVisuArr.push(s1, s2, s3, s4);
        break;
      case 5:
        diameter = (1.1 * svgWidth) / 2;
        s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 3);
        s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 2);
        s3 = new Scoop(
          visuWidth / 2 - svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          1
        );
        s4 = new Scoop(
          visuWidth / 2 + svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          1
        );
        s5 = new Scoop(visuWidth / 2, visuHeight / 2 - diameter, 0);
        ScoopVisuArr.push(s1, s2, s3, s4, s5);
        break;
      case 6:
        diameter = (1.1 * svgWidth) / 2;
        s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 5);
        s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 4);
        s3 = new Scoop(visuWidth / 2, visuHeight / 2 - diameter / 4, 2);
        s4 = new Scoop(
          visuWidth / 2 - svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          1
        );
        s5 = new Scoop(
          visuWidth / 2 + svgWidth / 8,
          visuHeight / 2 - diameter / 2,
          1
        );
        s6 = new Scoop(visuWidth / 2, visuHeight / 2 - diameter, 0);
        ScoopVisuArr.push(s1, s2, s3, s4, s5, s6);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <AnimatePresence>
        {store.scoops.map((el, index) => {
          return (
            <ScoopVisu
              key={el[2]}
              posx={ScoopVisuArr[index].x}
              posy={ScoopVisuArr[index].y}
              zindex={ScoopVisuArr[index].zIndex}
              diameter={diameter}
              el={el}
            />
          );
        })}
        <div className="h-3/6 flex justify-center mt-auto z-50 row-start-1">
          {store.cone ? <ConeImg /> : <CupImg />}
        </div>
      </AnimatePresence>
    </>
  );
}
