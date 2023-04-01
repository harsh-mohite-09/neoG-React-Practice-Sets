import React from "react";
import FiveSetTwo from "./SetTwo/FiveSetTwo";
import FourSetTwo from "./SetTwo/FourSetTwo";
import OneSetTwo from "./SetTwo/OneSetTwo";
import ThreeSetTwo from "./SetTwo/ThreeSetTwo";
import TwoSetTwo from "./SetTwo/TwoSetTwo";
import SixSetTwo from "./SetTwo/SixSetTwo";
import SevenSetTwo from "./SetTwo/SevenSetTwo";
import EightSetTwo from "./SetTwo/EightSetTwo";
import NineSetTwo from "./SetTwo/NineSetTwo";
import TenSetTwo from "./SetTwo/TenSetTwo";

const SetTwo = () => {
  return (
    <div className="card-container">
      <div className="flex justify-between w-full">
        <OneSetTwo />
        <TwoSetTwo />
        <ThreeSetTwo />
        <FourSetTwo />
      </div>
      <div className="flex mt-5 justify-center w-full">
        <div className="flex justify-evenly w-4/5">
          <FiveSetTwo />
          <SixSetTwo />
          <SevenSetTwo />
        </div>
      </div>
      <div className="flex mt-5 justify-between w-full">
        <EightSetTwo />
        <NineSetTwo />
        <TenSetTwo />
      </div>
    </div>
  );
};

export default SetTwo;
