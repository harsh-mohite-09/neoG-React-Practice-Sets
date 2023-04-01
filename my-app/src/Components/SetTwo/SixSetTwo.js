import React, { useState } from "react";
import QuestionNumber from "./QuestionNumber";

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="article-container">
      <div className="article-header">
        <h1>{title}</h1>
        <button
          className="btn btn-article"
          onClick={() => setShowContent(!showContent)}
        >
          Know More
        </button>
      </div>
      {showContent && <p className="article-content">{content}</p>}
    </div>
  );
};

const SixSetTwo = () => {
  return (
    <div className="card">
      <QuestionNumber num={6} />
      <Article title={title} content={content} />
    </div>
  );
};

export default SixSetTwo;
