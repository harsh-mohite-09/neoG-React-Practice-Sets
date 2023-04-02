import React from "react";
import QuestionNumber from "../SetTwo/QuestionNumber";

const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78,
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95,
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65,
  },
  {
    id: 4,
    name: "Nina",
    marks: 56,
  },
];

const Certification = ({ studentData }) => {
  const meanMarks =
    studentData.reduce((acc, { marks }) => acc + marks, 0) / studentData.length;

  return <p>Certification {meanMarks < 80 ? "Not" : ""} Approved</p>;
};

const TenSetThree = () => {
  return (
    <div className="card">
      <QuestionNumber num={10} />
      <Certification studentData={studentData} />
    </div>
  );
};

export default TenSetThree;
