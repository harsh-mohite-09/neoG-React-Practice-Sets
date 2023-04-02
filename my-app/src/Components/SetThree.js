import React from "react";
import OneSetThree from "./SetThree/OneSetThree";
import TwoSetThree from "./SetThree/TwoSetThree";
import ThreeSetThree from "./SetThree/ThreeSetThree";
import FourSetThree from "./SetThree/FourSetThree";
import FiveSetThree from "./SetThree/FiveSetThree";
import SixSetThree from "./SetThree/SixSetThree";
import SevenSetThree from "./SetThree/SevenSetThree";
import EightSetThree from "./SetThree/EightSetThree";
import NineSetThree from "./SetThree/NineSetThree";
import TenSetThree from "./SetThree/TenSetThree";

const SetThree = () => {
  return (
    <div className="card-container">
      <div className="flex justify-evenly w-full">
        <OneSetThree />
        <TwoSetThree />
        <ThreeSetThree />
        <FourSetThree />
      </div>
      <div className="flex justify-evenly items-center w-full mt-5">
        <FiveSetThree />
        <SixSetThree />
        <SevenSetThree />
        <EightSetThree />
      </div>
      <div className="flex justify-evenly items-center w-full mt-5">
        <NineSetThree />
        <TenSetThree />
      </div>
    </div>
  );
};

export default SetThree;
