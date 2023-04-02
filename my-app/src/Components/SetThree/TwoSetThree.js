import React from "react";
import QuestionNumber from "../SetTwo/QuestionNumber";

const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1,
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3,
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9,
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8,
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10,
  },
];

const HighMagnitudeCharacters = ({ cartoons }) => {
  const filteredCartoons = cartoons.filter(({ magnitude }) => magnitude > 5);
  return (
    <ul>
      {filteredCartoons.map(({ id, name, superpower, magnitude }) => {
        return (
          <li key={id} className="list-item">
            {name}, {superpower}, {magnitude}
          </li>
        );
      })}
    </ul>
  );
};

const TwoSetThree = () => {
  return (
    <div className="card">
      <QuestionNumber num={2} />
      <HighMagnitudeCharacters cartoons={cartoons} />
    </div>
  );
};

export default TwoSetThree;
