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

const EvenMagnitudeCartoons = ({ cartoons }) => {
  const evenMagnitudeCartoons = cartoons.filter(
    ({ magnitude }) => magnitude % 2 === 0
  );
  return (
    <ul>
      {evenMagnitudeCartoons.map(({ id, name, superpower, magnitude }) => {
        return (
          <li key={id} className="cartoon-list">
            <h1 className="heading">{name}</h1>
            {superpower}, {magnitude}
          </li>
        );
      })}
    </ul>
  );
};

const ThreeSetThree = () => {
  return (
    <div className="card">
      <QuestionNumber num={3} />
      <EvenMagnitudeCartoons cartoons={cartoons} />
    </div>
  );
};

export default ThreeSetThree;
