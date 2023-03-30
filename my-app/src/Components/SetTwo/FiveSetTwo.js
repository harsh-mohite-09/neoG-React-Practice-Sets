import React from "react";
import QuestionNumber from "./QuestionNumber";

const products = [
  {
    id: 1,
    name: "keyboard",
    description: "Logitech Mechanical Keyboard",
    price: 2000,
  },
  { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
  { id: 3, name: "mobile", description: "iPhone 13", price: 61000 },
  {
    id: 4,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 5, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 6,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 7,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 8, name: "mobile", description: "iPhone 12", price: 90000 },
];

const Phones = ({ products }) => {
  let phones = products.filter(({ name }) => name === "mobile");
  return (
    <ul>
      {phones.map(({ id, name, description, price }) => {
        return (
          <li key={id}>
            {name}, {description}, {price}
          </li>
        );
      })}
    </ul>
  );
};

const FiveSetTwo = () => {
  return (
    <div className="card">
      <QuestionNumber num={5} />
      <Phones products={products} />
    </div>
  );
};

export default FiveSetTwo;
