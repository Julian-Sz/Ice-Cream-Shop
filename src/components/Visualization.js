import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../App.js";
import CupImg from "./CupImg";
import ConeImg from "./ConeImg";
import ScoopVisu from "./ScoopVisu";
import { AnimatePresence } from "framer-motion";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default function Visualization(props) {
  const { store } = useContext(MyContext);

  const size = useWindowSize();

  const [finalVisuArr, setFinalVisuArr] = useState([]);
  const [finalDiameter, setFinalDiameter] = useState(130);
  useEffect(() => {
    class Scoop {
      constructor(x, y, zIndex, el) {
        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.el = el;
      }
    }
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
          s1 = new Scoop(visuWidth / 2, visuHeight / 2, 0, store.scoops[0]);
          scoopVisuArr.push(s1);
          diameter = svgWidth - 10;
          break;
        case 2:
          s1 = new Scoop(
            visuWidth / 2 - svgWidth / 5,
            visuHeight / 2,
            1,
            store.scoops[0]
          );
          s2 = new Scoop(
            visuWidth / 2 + svgWidth / 5,
            visuHeight / 2,
            0,
            store.scoops[1]
          );
          diameter = (1.1 * svgWidth) / 2;
          scoopVisuArr.push(s1, s2);
          break;
        case 3:
          diameter = (1.1 * svgWidth) / 2;
          s1 = new Scoop(
            visuWidth / 2 - svgWidth / 5,
            visuHeight / 2,
            2,
            store.scoops[0]
          );
          s2 = new Scoop(
            visuWidth / 2 + svgWidth / 5,
            visuHeight / 2,
            1,
            store.scoops[1]
          );
          s3 = new Scoop(
            visuWidth / 2,
            visuHeight / 2 - diameter / 2,
            0,
            store.scoops[2]
          );
          scoopVisuArr.push(s1, s2, s3);
          break;
        case 4:
          diameter = (1.1 * svgWidth) / 2;
          s1 = new Scoop(
            visuWidth / 2 - svgWidth / 5,
            visuHeight / 2,
            2,
            store.scoops[0]
          );
          s2 = new Scoop(
            visuWidth / 2 + svgWidth / 5,
            visuHeight / 2,
            1,
            store.scoops[1]
          );
          s3 = new Scoop(
            visuWidth / 2 - svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            0,
            store.scoops[2]
          );
          s4 = new Scoop(
            visuWidth / 2 + svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            0,
            store.scoops[3]
          );
          scoopVisuArr.push(s1, s2, s3, s4);
          break;
        case 5:
          diameter = (1.1 * svgWidth) / 2;
          s1 = new Scoop(
            visuWidth / 2 - svgWidth / 5,
            visuHeight / 2,
            3,
            store.scoops[0]
          );
          s2 = new Scoop(
            visuWidth / 2 + svgWidth / 5,
            visuHeight / 2,
            2,
            store.scoops[1]
          );
          s3 = new Scoop(
            visuWidth / 2 - svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            1,
            store.scoops[2]
          );
          s4 = new Scoop(
            visuWidth / 2 + svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            1,
            store.scoops[3]
          );
          s5 = new Scoop(
            visuWidth / 2,
            visuHeight / 2 - diameter,
            0,
            store.scoops[4]
          );
          scoopVisuArr.push(s1, s2, s3, s4, s5);
          break;
        case 6:
          diameter = (1.1 * svgWidth) / 2;
          s1 = new Scoop(
            visuWidth / 2 - svgWidth / 5,
            visuHeight / 2,
            5,
            store.scoops[0]
          );
          s2 = new Scoop(
            visuWidth / 2 + svgWidth / 5,
            visuHeight / 2,
            4,
            store.scoops[1]
          );
          s3 = new Scoop(
            visuWidth / 2,
            visuHeight / 2 - diameter / 4,
            2,
            store.scoops[2]
          );
          s4 = new Scoop(
            visuWidth / 2 - svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            1,
            store.scoops[3]
          );
          s5 = new Scoop(
            visuWidth / 2 + svgWidth / 8,
            visuHeight / 2 - diameter / 2,
            1,
            store.scoops[4]
          );
          s6 = new Scoop(
            visuWidth / 2,
            visuHeight / 2 - diameter,
            0,
            store.scoops[5]
          );
          scoopVisuArr.push(s1, s2, s3, s4, s5, s6);
          break;
        default:
          break;
      }
      setFinalVisuArr(scoopVisuArr);
      setFinalDiameter(diameter);
    }
  }, [store.scoops, size]);

  return (
    <>
      <AnimatePresence>
        {finalVisuArr.map((el, index) => {
          return (
            <ScoopVisu
              key={el.el[2]}
              posx={el.x}
              posy={el.y}
              zindex={el.zIndex}
              diameter={finalDiameter}
              el={el.el}
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
