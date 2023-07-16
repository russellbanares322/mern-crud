import React from "react";
import { HiOutlineCog } from "react-icons/hi";
import getOptionLetter from "../../hooks/getOptionLetter";

const Questions = ({ savedInputValuesData, questionNumber }) => {
  const questionText = savedInputValuesData.question.includes("?")
    ? savedInputValuesData.question
    : savedInputValuesData.question + "?";

  return (
    <div className="mb-9 rounded-md border border-black p-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[0.8rem] italic">{`Question # ${questionNumber}`}</h3>
        <HiOutlineCog className="cursor-pointer" size={20} />
      </div>
      <div className="mt-5">
        <p className="mb-2 text-[0.9rem] font-bold">{questionText}</p>
        {savedInputValuesData?.choices?.map((choice, choiceIdx) => (
          <p
            className={`mb-1 text-[0.9rem] ${
              choice.correctAnswer ? "font-bold text-green" : "text-black"
            }`}
            key={choice}
          >
            <span className="mr-1">
              {getOptionLetter(choiceIdx + 1)?.letter}.
            </span>
            {choice.option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Questions;
