import React from "react";
import { HiOutlineCog } from "react-icons/hi";

const Questions = ({ savedInputValuesData, questionNumber }) => {
  const questionText = savedInputValuesData.question.includes("?")
    ? savedInputValuesData.question
    : savedInputValuesData.question + "?";

  return (
    <div className="mb-16 rounded-md border border-black p-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[0.8rem] italic">{`Question # ${questionNumber}`}</h3>
        <HiOutlineCog className="cursor-pointer" size={20} />
      </div>
      <div className="mt-5">
        <p className="text-[0.9rem] font-bold">{questionText}</p>
      </div>
    </div>
  );
};

export default Questions;
