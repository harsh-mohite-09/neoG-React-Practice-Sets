import React, { useState } from "react";
import QuestionNumber from "./QuestionNumber";

const ColorPicker = () => {
  const red = "#EE4B2B";
  const blue = "#89CFF0";
  const green = "#7FFFD4";

  const [showColor, setShowColor] = useState({
    red: false,
    blue: false,
    green: false,
  });

  const colorHandler = (color) => {
    setShowColor({ ...showColor, [color]: !showColor[color] });
  };

  return (
    <div className="colors-container">
      <button className="btn btn-color" onClick={() => colorHandler("red")}>
        Red color
      </button>
      {showColor.red && (
        <p className="color-hex" style={{ backgroundColor: red }}>
          {red}
        </p>
      )}
      <button className="btn btn-color" onClick={() => colorHandler("blue")}>
        Blue color
      </button>
      {showColor.blue && (
        <p className="color-hex" style={{ backgroundColor: blue }}>
          {blue}
        </p>
      )}
      <button className="btn btn-color" onClick={() => colorHandler("green")}>
        Green color
      </button>
      {showColor.green && (
        <p className="color-hex" style={{ backgroundColor: green }}>
          {green}
        </p>
      )}
    </div>
  );
};

const NineSetTwo = () => {
  return (
    <div className="card">
      <QuestionNumber num={9} />
      <ColorPicker />
    </div>
  );
};

export default NineSetTwo;
