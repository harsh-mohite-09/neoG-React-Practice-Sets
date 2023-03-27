import React from "react";
import EightSetOne from "./EightSetOne";
import FiveSetOne from "./FiveSetOne";
import FourSetOne from "./FourSetOne";
import OneSetOne from "./OneSetOne";
import SevenSetOne from "./SevenSetOne";
import SixSetOne from "./SixSetOne";
import ThreeSetOne from "./ThreeSetOne";
import TwoSetOne from "./TwoSetOne";

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
