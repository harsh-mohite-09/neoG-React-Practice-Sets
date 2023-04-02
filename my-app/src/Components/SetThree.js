import React from "react";
import OneSetThree from "./SetThree/OneSetThree";
import TwoSetThree from "./SetThree/TwoSetThree";
import ThreeSetThree from "./SetThree/ThreeSetThree";
import FourSetThree from "./SetThree/FourSetThree";

const SetThree = () => {
  return (
    <div className="card-container">
      <div className="flex justify-evenly w-full">
        <OneSetThree />
        <TwoSetThree />
        <ThreeSetThree />
        <FourSetThree />
      </div>
      <div className="flex justify-evenly w-full mt-5"></div>
    </div>
  );
};

export default SetThree;
