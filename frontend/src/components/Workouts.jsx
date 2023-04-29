import React, { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import WorkoutContext from "../context/WorkoutContext";

const Workouts = () => {
  const { handleDeleteData, workoutData } = useContext(WorkoutContext);

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
                size={23}
              />
              <IoTrashOutline
                onClick={() => handleDeleteData(workout._id)}
                className="absolute right-3 top-3 cursor-pointer"
                size={22}
              />
              <p className="mb-2 text-xl">{workout.title}</p>
              <p>Load: {workout.load}</p>
              <p>Reps: {workout.reps}</p>
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
