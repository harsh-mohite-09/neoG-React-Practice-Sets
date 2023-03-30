import React from "react";
import EightSetOne from "./SetOne/EightSetOne";
import FiveSetOne from "./SetOne/FiveSetOne";
import FourSetOne from "./SetOne/FourSetOne";
import OneSetOne from "./SetOne/OneSetOne";
import SevenSetOne from "./SetOne/SevenSetOne";
import SixSetOne from "./SetOne/SixSetOne";
import ThreeSetOne from "./SetOne/ThreeSetOne";
import TwoSetOne from "./SetOne/TwoSetOne";

const SetOne = () => {
  return (
    <div className="flex flex-wrap">
      <OneSetOne num={1} />
      <TwoSetOne num={2} />
      <ThreeSetOne num={3} />
      <FourSetOne num={4} />
      <FiveSetOne num={5} />
      <SixSetOne num={6} />
      <SevenSetOne num={7} />
      <EightSetOne num={8} />
    </div>
  );
};

export default SetOne;
