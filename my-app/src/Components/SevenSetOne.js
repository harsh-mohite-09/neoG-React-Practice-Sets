import React from "react";
import Card from "./Card";

const student = {
  name: "John Doe",
  subjects: [
    { subject: "English", score: 90 },
    { subject: "Maths", score: 80 },
    { subject: "Computers", score: 70 },
  ],
};

const totalMarks = student.subjects.reduce((acc, { score }) => acc + score, 0);

const getGrade = (grade) => {
  if (grade > 180) return "A";
  if (grade > 150) return "B";
  return "C";
};

const StudentDetails = ({ student: { name, subjects } }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Student Details</h1>
      <p>Name: {name}</p>
      <ul>
        {subjects.map(({ subject, score }, i) => {
          return (
            <li key={i}>
              {subject}: {score}
            </li>
          );
        })}
      </ul>
      <p>Total Marks: {totalMarks}</p>
      <p>Grade: {getGrade(totalMarks)}</p>
    </div>
  );
};

const SevenSetOne = ({ num }) => {
  return (
    <Card num={num}>
      <StudentDetails student={student} />
    </Card>
  );
};

export default SevenSetOne;
