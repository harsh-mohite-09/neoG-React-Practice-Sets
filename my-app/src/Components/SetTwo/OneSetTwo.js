import React from "react";
import QuestionNumber from "./QuestionNumber";

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const OneSetTwo = () => {
  return (
    <div className="card">
      <QuestionNumber num={1} />
      <Greeting name={"Harsh Mohite"} />
    </div>
  );
};

export default OneSetTwo;
