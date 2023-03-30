import React from "react";
import Card from "./Card";

const employee = {
  name: "Harsh Mohite",
  designation: "Front-End Developer",
  experience: "1 year",
};

const EmployeeCard = ({ person }) => {
  const { name, designation, experience } = person;
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-xl mb-5">Name: {name}</h1>
      <p>
        <span className="text-green-500">Designation:</span> {designation}
      </p>
      <p>
        <span className="text-blue-500">Experience:</span> {experience}
      </p>
    </div>
  );
};

const OneSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <EmployeeCard person={employee} />
    </Card>
  );
};

export default OneSetOne;
