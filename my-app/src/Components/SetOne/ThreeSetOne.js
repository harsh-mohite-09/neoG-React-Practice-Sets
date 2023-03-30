import React from "react";
import Card from "./Card";

const items = ["pen", "pencil", "ruler", "eraser"];
const header = "Stationary Items";

const StationaryItems = ({ items, header }) => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">{header}</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ThreeSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <StationaryItems items={items} header={header} />
    </Card>
  );
};

export default ThreeSetOne;
