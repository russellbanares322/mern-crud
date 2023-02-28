import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Form = ({ handleToggleForm }) => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("" || 0);
  const [load, setLoad] = useState("" || 0);
  const [errMessage, setErrMessage] = useState(null);

  const mainColor = "#008374";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();

    if (!response.ok) {
      setErrMessage(jsonResponse.error);
      console.log(jsonResponse.error);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setErrMessage(null);
      alert("newWorkoutAdded");
      console.log(jsonResponse);
    }
  };

  return (
    <div className="flex h-full translate-y-[-350px] items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col rounded-[0.5rem] bg-[${mainColor}] relative p-[2rem]`}
      >
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
        <button className="mt-2 mb-3 h-[2rem] rounded-sm bg-white">
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default Form;
