import React from "react";
import Card from "./Card";

const details = {
  imageLink:
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg",
  caption: "Spring Flowers",
};

const DisplayImage = ({ details }) => {
  return (
    <div className="w-11/12 text-center">
      <h1 className="font-bold mb-2">{details.caption}</h1>
      <img src={details.imageLink} alt="myImage" className="rounded-lg" />
    </div>
  );
};

const FourSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <DisplayImage details={details} />
    </Card>
  );
};

export default FourSetOne;
