import React from "react";
import QuestionNumber from "../SetTwo/QuestionNumber";

const bouquet = [
  {
    id: 1,
    flowers: ["rose", "lily", "marigold"],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ["snapdragon", "sunflower"],
    totalFlowers: 10,
    price: 3400,
  },
];

const FlowersGreaterThan2000 = ({ bouquet }) => {
  const filteredFlowers = bouquet.filter(({ price }) => price > 2000)[0]
    .flowers;
  return (
    <ol className="list-decimal">
      {filteredFlowers.map((flower, i) => {
        return <li key={i}>{flower}</li>;
      })}
    </ol>
  );
};

const SevenSetThree = () => {
  return (
    <div className="card">
      <QuestionNumber num={7} />
      <FlowersGreaterThan2000 bouquet={bouquet} />
    </div>
  );
};

export default SevenSetThree;
