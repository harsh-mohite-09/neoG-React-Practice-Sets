import React from "react";
import QuestionNumber from "./QuestionNumber";

const Product = ({ name, price }) => {
  return (
    <>
      <span className="product-name">{name}</span>
      <span className="product-price">{price}</span>
    </>
  );
};

const TwoSetTwo = () => {
  return (
    <div className="card ml">
      <QuestionNumber num={2} />
      <Product name={"Bluetooth Speaker"} price={4999} />
    </div>
  );
};

export default TwoSetTwo;
