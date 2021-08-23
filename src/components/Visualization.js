import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../App.js";
import CupImg from "./CupImg";
import ConeImg from "./ConeImg";
import ScoopVisu from "./ScoopVisu";
import { AnimatePresence } from "framer-motion";

export default function Visualization(props) {
  const { store } = useContext(MyContext);

  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.addEventListener("resize", handleResize);
  //   };
  // }, []);

  class Scoop {
    constructor(x, y, zIndex) {
      this.x = x;
      this.y = y;
      this.zIndex = zIndex;
    }
  }

  const [finalVisuArr, setFinalVisuArr] = useState([]);
  const [finalDiameter, setFinalDiameter] = useState(130);
  useEffect(() => {
    const scoopVisuArr = [];
    const visuContainer = document.getElementById("visuContainer");
    const svg = document.getElementById("svg_visu");
    if (visuContainer !== null && svg !== null) {
      const visuHeight = visuContainer.getBoundingClientRect().height;
      const visuWidth = visuContainer.getBoundingClientRect().width;
      const svgWidth = svg.getBoundingClientRect().width;
      let diameter;
      diameter = svgWidth / 2;
      let s1, s2, s3, s4, s5, s6;
      switch (store.scoops.length) {
        case 1:
          s1 = new Scoop(visuWidth / 2, visuHeight / 2, 0);
          scoopVisuArr.push(s1);
          diameter = svgWidth - 10;
          break;
        case 2:
          s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 1);
          s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 0);
          diameter = (1.1 * svgWidth) / 2;
          scoopVisuArr.push(s1, s2);
          break;
        case 3:
          diameter = (1.1 * svgWidth) / 2;
          s1 = new Scoop(visuWidth / 2 - svgWidth / 5, visuHeight / 2, 2);
          s2 = new Scoop(visuWidth / 2 + svgWidth / 5, visuHeight / 2, 1);
          s3 = new Scoop(visuWidth / 2, visuHeight / 2 - diameter / 2, 0);
          scoopVisuArr.push(s1, s2, s3);
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
          scoopVisuArr.push(s1, s2, s3, s4);
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
          scoopVisuArr.push(s1, s2, s3, s4, s5);
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
          scoopVisuArr.push(s1, s2, s3, s4, s5, s6);
          break;
        default:
          break;
      }
      setFinalVisuArr(scoopVisuArr);
      setFinalDiameter(diameter);
    }
  }, [store.scoops]);

  return (
    <>
      <AnimatePresence>
        {finalVisuArr.map((el, index) => {
          return (
            <ScoopVisu
              key={store.scoops[index][2]}
              posx={el.x}
              posy={el.y}
              zindex={el.zIndex}
              diameter={finalDiameter}
              el={store.scoops[index]}
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
