import React from "react";
import Card from "./Card";

const styles = {
  bgColor: "lightgreen",
  color: "darkgreen",
  borderRadius: "5px",
  padding: "10px",
};

const StartButton = ({ styles }) => {
  const { bgColor, color, borderRadius, padding } = styles;
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
        padding: padding,
      }}
    >
      Start
    </button>
  );
};

const TwoSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <StartButton styles={styles} />
    </Card>
  );
};

export default TwoSetOne;
