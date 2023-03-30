import React from "react";
import Card from "./Card";

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 },
];

const GotMoreSales = ({ products }) => {
  return (
    <div>
      <ul>
        {products
          .filter(({ quantity, sales }) => sales > quantity)
          .map(({ name, quantity, sales }, i) => {
            return (
              <li key={i}>
                Name: {name}, Quantity: {quantity}, Sales: {sales}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const SixSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <GotMoreSales products={products} />
    </Card>
  );
};

export default SixSetOne;
