import React, { useState, useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { createWorkout } from "../api/workoutApi/createWorkout";
import { updateWorkout } from "../api/workoutApi/updateWorkout";

import WorkoutContext from "../context/WorkoutContext";

const Form = ({ showFormModal, setShowFormModal, handleCloseFormModal }) => {
  const { setWorkoutData, selectedWorkout, setSelectedWorkout } =
    useContext(WorkoutContext);
  const mainColor = "#008374";
  const [formData, setFormData] = useState({
    title: "",
    reps: 1,
    load: 1,
  });
  const isFormDirty = !formData.title;

  const handleAddData = async (e) => {
    e.preventDefault();
    const updatedWorkoutData = await createWorkout(formData);
    setWorkoutData(updatedWorkoutData);
    handleCloseFormModal();
    setFormData({
      title: "",
      reps: 1,
      load: 1,
    });
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
    await updateWorkout(selectedWorkout._id, {
      title: formData.title,
      reps: formData.reps,
      load: formData.load,
    });
    setSelectedWorkout(null);
    setFormData({
      title: "",
      reps: 1,
      load: 1,
    });
    handleCloseFormModal();
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (selectedWorkout !== null) {
      setFormData({
        title: selectedWorkout.title,
        reps: selectedWorkout.reps,
        load: selectedWorkout.load,
      });
      setShowFormModal(true);
    } else {
      setFormData({
        title: "",
        reps: 1,
        load: 1,
      });
      setShowFormModal(false);
    }
  }, [selectedWorkout]);

  return (
    <div
      className={`visible fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 duration-500 ${
        !showFormModal && "hidden"
      }`}
    >
      <form className="relative flex w-auto  flex-col rounded-md bg-white p-[2rem]">
        <IoClose
          onClick={handleCloseFormModal}
          className="absolute top-2 right-3 mb-[20px] cursor-pointer"
          size={27}
          color="black"
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
          disabled={isFormDirty}
          onClick={selectedWorkout === null ? handleAddData : handleUpdateData}
          className={`mt-2 mb-3 h-[2rem] rounded-sm text-white bg-[${mainColor}] disabled:bg-zinc-400 disabled:text-black`}
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default Form;
