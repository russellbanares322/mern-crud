import { useState } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import getOptionLetter from "../../hooks/getOptionLetter";
import { toast } from "react-hot-toast";
import Questions from "./Questions";

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
    const isNoCorrectAnswerSelected = inputValues.choices.every(
      (choice) => choice.correctAnswer === false
    );

    if (isNoCorrectAnswerSelected) {
      return toast.error(
        "Please choose a correct answer by checking one of the radio button"
      );
    }

    setSavedInputValues([...savedInputValues, inputValues]);
    toast.success("Successfully added question");
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

  const handleRemoveQuestion = (selectedId) => {
    const filteredQuestions = savedInputValues.filter(
      (_, inputIdx) => selectedId !== inputIdx
    );
    setSavedInputValues(filteredQuestions);
  };

  return (
    <div className="mx-auto mb-5 w-[24rem]">
      <div className="fixed bg-white">
        <div className="flex items-center justify-start gap-5">
          <label className="mr-auto ml-7">Question:</label>
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
            className="my-2 flex h-[2rem] items-center gap-1 rounded-md bg-green px-2 text-xs text-white disabled:bg-light-green disabled:text-gray"
          >
            <HiPlusSm size={20} /> ADD OPTION
          </button>
        </div>
        {inputValues.choices.map((choice, index) => (
          <div key={index} className="mt-2 flex items-center justify-start">
            <label className="mr-auto ml-8 text-sm">
              Option {getOptionLetter(index + 1)?.letter} :
            </label>
            <div className="flex items-center justify-evenly gap-3">
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
                className="w-[11rem] rounded-md border px-2 py-1 placeholder:text-sm"
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
        <div className="mt-5 flex items-end justify-end">
          <button
            disabled={
              isOptionMin ||
              inputValues.choices.some((choice) => choice.option === "")
            }
            onClick={handleSaveQuestion}
            className="flex h-[2rem] items-center gap-1 rounded-md bg-green px-3 text-white disabled:bg-light-green disabled:text-gray"
          >
            <HiPlusSm size={20} /> ADD QUESTION
          </button>
        </div>
      </div>
      <h1 className="mb-6 pt-56 text-center">Questions</h1>
      <h1 className="mb-6 text-center">
        {savedInputValues.length === 0 && "No questions added yet"}
      </h1>
      {savedInputValues?.map((data, index) => (
        <Questions
          key={index}
          savedInputValuesData={data}
          questionIndex={index}
          handleRemoveQuestion={handleRemoveQuestion}
        />
      ))}
    </div>
  );
};

export default DynamicForm;
