import React from "react";
import FiveSetTwo from "./SetTwo/FiveSetTwo";
import FourSetTwo from "./SetTwo/FourSetTwo";
import OneSetTwo from "./SetTwo/OneSetTwo";
import ThreeSetTwo from "./SetTwo/ThreeSetTwo";
import TwoSetTwo from "./SetTwo/TwoSetTwo";

const SetTwo = () => {
  return (
    <div className="card-container">
      <div className="flex justify-between w-full">
        <OneSetTwo />
        <TwoSetTwo />
        <ThreeSetTwo />
        <FourSetTwo />
      </div>
      <div className="flex justify-between mt-5">
        <FiveSetTwo />
      </div>
    </div>
  );
};

export default SetTwo;
