import React from "react";
import ColorButton from "./ColorButton";
import "./Button.css";
const Buttons = ({ options, addCircle }) => {
  return (
    <div className="coloredButtons">
      {options.map((color) => (
        <ColorButton color={color} addCircle={addCircle} />
      ))}
    </div>
  );
};
export default Buttons;
