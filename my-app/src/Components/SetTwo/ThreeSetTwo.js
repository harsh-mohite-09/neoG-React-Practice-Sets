import React from "react";
import QuestionNumber from "./QuestionNumber";

const userData = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

const UserProfile = ({ userData }) => {
  const { name, age, email } = userData;
  return (
    <div className="userProfile">
      <span>Name: {name}</span>
      <span>Age: {age}</span>
      <span>Email: {email}</span>
    </div>
  );
};

const ThreeSetTwo = () => {
  return (
    <div className="card ml">
      <QuestionNumber num={3} />
      <UserProfile userData={userData} />
    </div>
  );
};

export default ThreeSetTwo;
