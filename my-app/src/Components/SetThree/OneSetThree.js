import React from "react";
import QuestionNumber from "../SetTwo/QuestionNumber";

const ImageComponent = ({ height, width }) => {
  return (
    <img
      src="https://picsum.photos/200"
      alt="photos"
      height={height}
      width={width}
    />
  );
};

const OneSetThree = () => {
  return (
    <div className="card">
      <QuestionNumber num={1} />
      <ImageComponent height={"230px"} width={"230px"} />
    </div>
  );
};

export default OneSetThree;
