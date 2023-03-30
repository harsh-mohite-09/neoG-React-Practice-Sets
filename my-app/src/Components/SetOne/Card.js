import React from "react";

const Card = ({ children, num }) => {
  return (
    <div className="border border-black w-[360px] h-[360px] text-center flex justify-center items-center rounded-xl mr-2 mb-2 relative">
      <h1 className="absolute top-2 left-2/4 translate-x-[-50%] font-bold text-xl">
        Q-{num}
      </h1>
      {children}
    </div>
  );
};

export default Card;
