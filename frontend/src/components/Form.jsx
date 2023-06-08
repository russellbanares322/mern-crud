import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { createWorkout } from "../api/workoutApi/createWorkout";

const Form = ({ handleToggleForm }) => {
  const mainColor = "#008374";
  const [formData, setFormData] = useState({
    title: "",
    reps: 0,
    load: 0,
  });

  const handleAddData = async (e) => {
    e.preventDefault();
    await createWorkout(formData);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          name="title"
          value={formData.title}
          onChange={handleFormChange}
          className="input"
          type="text"
          placeholder="Workout name..."
        />
        <label className="label">Reps</label>
        <input
          name="reps"
          value={formData.reps}
          onChange={handleFormChange}
          className="input"
          type="number"
          placeholder="Workout reps..."
        />
        <label className="label">Loads</label>
        <input
          name="load"
          value={formData.load}
          onChange={handleFormChange}
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
