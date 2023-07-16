import { useState } from "react";
import { HiMinusSm } from "react-icons/hi";
import getOptionLetter from "../../hooks/getOptionLetter";

const DynamicForm = () => {
  const [inputValues, setInputValues] = useState({
    question: "",
    choices: [
      {
        option: "",
        correctAnswer: false,
      },
    ],
  });
  const [savedInputValues, setSavedInputValues] = useState([]);
  const isOptionMin = inputValues.choices.length === 1;
  const isOptionMax = inputValues.choices.length === 4;

  const handleInputChange = (e) => {
    const { value } = e.target;

    setInputValues({
      ...inputValues,
      question: value,
    });
  };

  const handleRadioChange = (e, correctAnswerIdx) => {
    const { checked } = e.target;

    setInputValues({
      ...inputValues,
      choices: inputValues.choices.map((choice, choiceIndex) => ({
        ...choice,
        correctAnswer:
          checked && correctAnswerIdx === choiceIndex ? checked : false,
      })),
    });
  };

  const handleOptionChange = (e, optionIdx) => {
    const { value } = e.target;

    setInputValues({
      ...inputValues,
      choices: inputValues.choices.map((choice, choiceIndex) =>
        optionIdx === choiceIndex
          ? {
              ...choice,
              option: value,
            }
          : choice
      ),
    });
  };

  const handleRemoveOption = (selectedOptionIdx) => {
    const filteredOption = inputValues.choices.filter(
      (_, optionIdx) => selectedOptionIdx !== optionIdx
    );
    setInputValues({
      ...inputValues,
      choices: filteredOption,
    });
  };

  const handleAddOption = () => {
    setInputValues({
      ...inputValues,
      choices: [
        ...inputValues.choices,
        {
          option: "",
          correctAnswer: false,
        },
      ],
    });
  };

  const handleSaveQuestion = () => {
    setSavedInputValues([...savedInputValues, inputValues]);
    setInputValues({
      question: "",
      choices: [
        {
          option: "",
          correctAnswer: false,
        },
      ],
    });
  };

  return (
    <div className="w-[24rem]">
      <br />
      <div>
        <div className="flex items-center justify-start gap-5">
          <label className="mr-auto">Question # 1</label>
          <input
            value={inputValues.question}
            onChange={handleInputChange}
            className="w-[15rem] rounded-md border px-2 py-1 placeholder:text-sm"
            placeholder="Please write question here..."
            type="text"
          />
        </div>
        <div className="flex items-end justify-end">
          <button
            disabled={isOptionMax}
            onClick={handleAddOption}
            className="my-2 h-[2rem] rounded-md bg-green px-2 text-xs text-white disabled:bg-light-green disabled:text-gray"
          >
            Add Option
          </button>
        </div>
        {inputValues.choices.map((choice, index) => (
          <div
            key={choice.question}
            className="mt-2 flex items-center justify-start"
          >
            <label className="mr-auto ml-9 text-sm">
              Option {getOptionLetter(index + 1)?.letter} :
            </label>
            <div className="flex items-center justify-evenly gap-4">
              <input
                checked={
                  inputValues.choices.find(
                    (_, choiceIdx) => choiceIdx === index
                  )?.correctAnswer === true
                }
                value={
                  inputValues.choices.find(
                    (_, choiceIdx) => choiceIdx === index
                  )?.correctAnswer
                }
                onChange={(e) => handleRadioChange(e, index)}
                className="scale-[1.5] transform cursor-pointer"
                type="radio"
              />
              <input
                value={
                  inputValues.choices.find(
                    (_, optionIdx) => index === optionIdx
                  )?.option
                }
                onChange={(e) => handleOptionChange(e, index)}
                placeholder="Please write answer here..."
                className="w-[10rem] rounded-md border px-2 py-1 placeholder:text-sm"
                type="text"
              />
              <button
                disabled={isOptionMin}
                className="h-[2rem] rounded-md bg-red px-2 disabled:bg-light-red"
                onClick={() => handleRemoveOption(index)}
              >
                <HiMinusSm
                  className={`${isOptionMin ? "text-gray" : "text-white"}`}
                  size={20}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-end justify-end">
        <button
          disabled={
            isOptionMin ||
            inputValues.choices.some((choice) => choice.option === "")
          }
          onClick={handleSaveQuestion}
          className="h-[2rem] rounded-md bg-green px-5 text-white disabled:bg-light-green disabled:text-gray"
        >
          Save Question
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
