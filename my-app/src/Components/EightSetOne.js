import React from "react";

const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000,
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000,
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000,
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500,
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700,
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900,
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500,
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200,
  },
];

const totalSalary = employees.reduce((acc, { salary }) => acc + salary, 0);

const EmployeeList = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Employee List</h1>
      <ul className="text-left border border-black p-4 rounded-lg">
        {employees.map(({ name, level, dept, designation, salary }, i) => {
          return (
            <li
              className="p-1 my-1 rounded-md pl-2"
              key={i}
              style={{
                backgroundColor: `${level === 2 && "orange"}`,
                border: `${designation === "President" && "2px solid red"}`,
              }}
            >
              name: {name}, level, {level}, dept: {dept}, designation:{" "}
              {designation}, salary: {salary}
            </li>
          );
        })}
      </ul>
      <p className="mt-3">Total Salary Expense: {totalSalary}</p>
    </div>
  );
};

const EightSetOne = ({ num }) => {
  return (
    <div className="border border-black w-[728px] h-[580px] text-center flex justify-center items-center rounded-xl mr-2 mb-2 relative">
      <h1 className="absolute top-2 left-2/4 translate-x-[-50%] mb-5 font-bold text-xl">
        Q-{num}
      </h1>
      <EmployeeList />
    </div>
  );
};

export default EightSetOne;
