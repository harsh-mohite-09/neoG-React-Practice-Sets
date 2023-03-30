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
  {
    id: 3,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 5,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 6,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
];

const getBorder = (amount) => (amount > 50000 ? "1px solid red" : "");

const Gadgets = ({ products }) => {
  return (
    <ul>
      {products.map(({ id, name, price, description }) => (
        <li
          key={id}
          className="list-item"
          style={{ border: getBorder(price), borderRadius: "0.5em" }}
        >
          {name}, {description}, {price}
        </li>
      ))}
    </ul>
  );
};

const FourSetTwo = () => {
  return (
    <div className="card long-card ml">
      <QuestionNumber num={4} />
      <Gadgets products={products} />
    </div>
  );
};

export default FourSetTwo;
