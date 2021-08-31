import React from "react";
import "./Circle.css";

const Circle = ({ color, idx, x, y, changePos }) => {
  return (
    <div
      onClick={() => changePos(idx)}
      className="Circle"
      style={{
        backgroundColor: color,
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
      }}
    >
      {idx + 1}
    </div>
  );
};
export default Circle;
