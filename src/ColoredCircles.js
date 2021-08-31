import { useState, React } from "react";
import Circle from "./Circle";
import Buttons from "./Buttons";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}
const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => {
      return [...circles, { color, x: getRandom(), y: getRandom() }];
    });
  };
  const changePos = (idx) => {
    setCircles((circles) => {
      const copy = [...circles];
      copy[idx].x = getRandom();
      copy[idx].y = getRandom();
      return copy;
    });
  };
  return (
    <div>
      <Buttons
        addCircle={addCircle}
        options={["mintcream", "lavender", "mistyRose"]}
      />

      {circles.map(({ color, x, y }, idx) => (
        <Circle
          changePos={changePos}
          color={color}
          idx={idx}
          key={idx}
          x={x}
          y={y}
        />
      ))}
    </div>
  );
};
export default ColoredCircles;
