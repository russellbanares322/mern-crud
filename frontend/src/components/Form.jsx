import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import WorkoutContext from "../context/WorkoutContext";

const Form = ({ handleToggleForm }) => {
  const { title, setTitle, reps, setReps, load, setLoad, handleAddData } =
    useContext(WorkoutContext);

  const mainColor = "#008374";

  return (
    <div className="h-modal fixed top-4 left-0 right-0 z-50 w-auto items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-900">
      <form className={`flex flex-col  bg-[${mainColor}] w-auto p-[2rem]`}>
        <IoClose
          onClick={handleToggleForm}
          className="absolute top-2 right-3 mb-[20px] cursor-pointer"
          size={27}
          color="white"
        />
        <label className="label">Workout Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          type="text"
          placeholder="Workout name..."
        />
        <label className="label">Reps</label>
        <input
          value={reps}
          onChange={(e) => setReps(e.target.valueAsNumber)}
          className="input"
          type="number"
          placeholder="Workout reps..."
        />
        <label className="label">Loads</label>
        <input
          value={load}
          onChange={(e) => setLoad(e.target.valueAsNumber)}
          className="input"
          type="number"
          placeholder="Workout loads..."
        />
        <button
          onClick={handleAddData}
          className="mt-2 mb-3 h-[2rem] rounded-sm bg-white"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default Form;
