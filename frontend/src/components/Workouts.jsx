import React, { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { deleteWorkout } from "../api/workoutApi/deleteWorkout";
import WorkoutContext from "../context/WorkoutContext";

const Workouts = () => {
  const { workoutData, setWorkoutData, setSelectedWorkout } =
    useContext(WorkoutContext);

  const handleDeleteWorkout = async (selectedId) => {
    if (
      window.confirm(
        "Deleting this data will remove it permanently, are you sure?"
      )
    ) {
      await deleteWorkout(selectedId);
      setWorkoutData(
        workoutData.filter((workout) => workout._id !== selectedId)
      );
    }
  };

  const handleSelectWorkout = (selectedWorkoutData) => {
    setSelectedWorkout(selectedWorkoutData);
  };

  return (
    <div className=" mr-4 mb-5">
      <div className="flex  flex-wrap items-center justify-center px-5">
        {workoutData &&
          workoutData.map((workout) => (
            <div
              className="relative m-4 rounded-lg bg-[#008D7D] p-14 text-white"
              key={workout._id}
            >
              <AiOutlineEdit
                className="absolute right-10 top-3 cursor-pointer"
                onClick={() => handleSelectWorkout(workout)}
                size={23}
              />
              <IoTrashOutline
                onClick={() => handleDeleteWorkout(workout._id)}
                className="absolute right-3 top-3 cursor-pointer"
                size={22}
              />
              <p className="mb-2 text-xl">{workout.title}</p>
              <p>Reps: {workout.reps}</p>
              <p>Load: {workout.load}</p>
              <p className="pt-10">
                {new Date(workout.createdAt).toDateString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Workouts;
