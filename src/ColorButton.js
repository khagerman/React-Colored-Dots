import React from "react";
import "./Button.css";
const ColorButton = ({ color, addCircle }) => {
  return (
    <div className="Button">
      <button
        onClick={() => addCircle(color)}
        className="Button"
        style={{ backgroundColor: color }}
      >
        {color}
      </button>
    </div>
  );
};
export default ColorButton;
