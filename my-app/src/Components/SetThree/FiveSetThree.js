import React, { useState } from "react";
import QuestionNumber from "../SetTwo/QuestionNumber";

const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25",
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30",
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25",
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27",
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30",
  },
];

const VegatableList = ({ vegetables }) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <>
      <ol className="vegetables-list list-disc">
        {vegetables.map(({ id, name, pickDate }) => {
          return (
            <li
              key={id}
              style={{
                color:
                  highlight && pickDate === "2023-03-30" ? "yellowgreen" : "",
              }}
            >
              <h1 className="heading">{name}</h1>
              {pickDate}
            </li>
          );
        })}
      </ol>
      <button className="btn" onClick={() => setHighlight(!highlight)}>
        Highlight Fresh Vegetables
      </button>
    </>
  );
};

const FiveSetThree = () => {
  return (
    <div className="card vegetables-card">
      <QuestionNumber num={5} />
      <VegatableList vegetables={vegetables} />
    </div>
  );
};

export default FiveSetThree;
