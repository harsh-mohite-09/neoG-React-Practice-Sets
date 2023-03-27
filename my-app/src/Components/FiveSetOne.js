import React from "react";
import Card from "./Card";

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 },
];

const ProductList = ({ products }) => {
  return (
    <div className="text-left">
      <h1 className="font-bold text-xl mb-3">Product Names</h1>
      <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
        {products.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

const FiveSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <ProductList products={products} />
    </Card>
  );
};

export default FiveSetOne;
