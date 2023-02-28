import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";

const Workouts = ({ workout }) => {
  const dateCreated = new Date(workout.createdAt);

  const handleDelete = async (workoutID) => {
    if (window.confirm("Are you sure do you want to delete this workout?")) {
      const response = await fetch(`/api/workouts/${workoutID}`, {
        method: "DELETE",
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      return;
    }
  };

  return (
    <div className="relative mr-4 rounded-lg bg-[#008D7D] p-14 text-white">
      <AiOutlineEdit
        className="absolute right-10 top-3 cursor-pointer"
        size={23}
      />
      <IoTrashOutline
        onClick={() => handleDelete(workout._id)}
        className="absolute right-3 top-3 cursor-pointer"
        size={22}
      />
      <p className="mb-2 text-xl">{workout.title}</p>
      <p>Load: {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p className="pt-10">{dateCreated.toDateString()}</p>
    </div>
  );
};

export default Workouts;
