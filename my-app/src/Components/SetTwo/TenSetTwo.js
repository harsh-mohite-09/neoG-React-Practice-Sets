import React from "react";
import QuestionNumber from "./QuestionNumber";

const todoItems = [
  {
    id: 1,
    title: "Complete practice set",
    description: "Practice set 1 of React",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Attend revision session",
    description: "Revision session of React",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Watch recording",
    description: "Live session recording of React",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Attend DSH",
    description: "Doubt Solving Hours of React",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Complete practice set",
    description: "Practice set 2 of React",
    isCompleted: false,
  },
];

const Todo = ({ todoItems }) => {
  return (
    <ul style={{ listStyle: "disc" }}>
      {todoItems.map(({ id, title, description, isCompleted }) => {
        return (
          <li
            key={id}
            className="list-item"
            style={{ color: isCompleted ? "yellowgreen" : "" }}
          >
            <h1 className="todo-heading">{title}</h1>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

const TenSetTwo = () => {
  return (
    <div className="card product-card">
      <QuestionNumber num={10} />
      <Todo todoItems={todoItems} />
    </div>
  );
};

export default TenSetTwo;
