import React, { useState } from "react";
import QuestionNumber from "./QuestionNumber";

const heading = "About Me";
const name = "Preeti"; // you can put your name
const learning = "I am learning React JS currently at neoG Camp.";

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState(false);

  return (
    <div className="about-container">
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button className="btn" onClick={() => setShowLearning(!showLearning)}>
        Know More
      </button>

      {showLearning && <p className="article-content">{learning}</p>}
    </div>
  );
};

const SevenSetTwo = () => {
  return (
    <div className="card">
      <QuestionNumber num={7} />
      <About heading={heading} name={name} learning={learning} />
    </div>
  );
};

export default SevenSetTwo;
