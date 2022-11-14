import React, { useRef, useState } from "react";
import { hexToHSL } from "./utils/hexToHSL";
import "./index.css";
const App = () => {
  const wheelWrapper = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLUListElement>(null);
  const [isSpin, setIsSpin] = useState(false);
  const array: Array<{ style: { backgroundColor: string }; option: string }> = [
    { style: { backgroundColor: "#ccc" }, option: "" },
    { style: { backgroundColor: "#0c0" }, option: "" },
    { style: { backgroundColor: "#2c5" }, option: "" },
  ];
  const endSpin = () => {};
  const [rotation, setRotation] = useState(0);
  const calcDeg = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const startGame = () => {
    setRotation(Math.floor(Math.random() * 360 + calcDeg(2000, 5000)));
  };
  return (
    <div id={"wrapper"}>
      <div
        className={`deal-wheel${isSpin ? " is-spinning" : ""}`}
        ref={wheelWrapper}
      >
        <ul
          className={`spinner${array.length > 1 ? " hasChild" : ""}`}
          ref={ref}
          onTransitionEnd={endSpin}
          style={{
            background: `conic-gradient(from -90deg, ${array
              .map(
                ({ style }, i) =>
                  `${hexToHSL(style.backgroundColor)} 0 ${
                    (100 / array.length) * (array.length - i)
                  }%`
              )
              .reverse()})`,
            transform: `rotate(${rotation}deg)`,
            border: "1px solid black",
          }}
        >
          {array.map(({ option, style }, i) => {
            // const rotation = ((prizeSlice * i) * -1) - prizeOffset;
            const rotation = 150;
            return (
              <li
                className={`prize${array.length < 2 ? " last" : ""}`}
                // @ts-ignore
                style={{ "--rotate": `${rotation}deg` }}
              >
                <span className="text">{option}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
