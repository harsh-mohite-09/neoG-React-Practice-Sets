import React, { useState } from "react";
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
    name: "speakers",
    description: "Bose L1 Pro32 Portable",
    price: 256000,
  },
  { id: 4, name: "mobile", description: "iPhone 13", price: 61000 },
  {
    id: 5,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 6, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 7,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 8,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 9, name: "mobile", description: "iPhone 12", price: 90000 },
];

const MyGadgets = ({ products }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <>
      <ol style={{ listStyle: "decimal" }} className="product-list">
        {products.map(({ id, name, description, price }) => {
          return (
            <li
              key={id}
              className="list-item"
              style={{
                backgroundColor: highlight && price > 50000 ? "lightgreen" : "",
              }}
            >
              {name}, {description}, {price}
            </li>
          );
        })}
      </ol>
      <button className="btn my-2" onClick={() => setHighlight(!highlight)}>
        Highlight Expensive Gadget
      </button>
    </>
  );
};

const EightSetTwo = () => {
  return (
    <div className="card product-card">
      <QuestionNumber num={8} />
      <MyGadgets products={products} />
    </div>
  );
};

export default EightSetTwo;
