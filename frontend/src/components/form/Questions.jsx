import React, { useState } from "react";
import {
  HiOutlineCog,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";
import getOptionLetter from "../../hooks/getOptionLetter";

const Questions = ({
  savedInputValuesData,
  questionIndex,
  handleRemoveQuestion,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const questionText = savedInputValuesData.question.includes("?")
    ? savedInputValuesData.question
    : savedInputValuesData.question + "?";

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="mb-9 rounded-md border border-black p-2 shadow-lg">
      <div className="relative flex items-center justify-between">
        <h3 className="text-[0.8rem] italic underline">{`Question # ${
          questionIndex + 1
        }`}</h3>
        <HiOutlineCog
          onClick={handleToggleSettings}
          className={`cursor-pointer duration-300 ease-out ${
            showSettings ? "rotate-0" : "rotate-90"
          }`}
          size={20}
        />
        <div
          className={`absolute top-6 right-1 rounded-md border border-green bg-white py-1 shadow-xl  duration-300 ease-in-out ${
            !showSettings && "scale-0"
          }`}
        >
          <p className="flex w-full cursor-pointer items-center gap-1 px-3 text-sm hover:bg-pale-white">
            <HiOutlinePencilAlt className="text-green" />
            Update
          </p>
          <p
            onClick={() => handleRemoveQuestion(questionIndex)}
            className="flex cursor-pointer items-center gap-1 px-3 text-sm hover:bg-pale-white"
          >
            <HiOutlineTrash className="text-red" />
            Remove
          </p>
        </div>
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
