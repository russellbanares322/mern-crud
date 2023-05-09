import React, { useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWorkout } from "../api/workoutApi/FetchAllWorkout";
import { deleteWorkout } from "../api/workoutApi/deleteWorkout";

const Workouts = () => {
  const dispatch = useDispatch();
  const workoutData = useSelector((state) => state.workout.workouts);

  const handleDeleteWorkout = (selectedId) => {
    if (window.confirm("Are you sure? ")) {
      dispatch(deleteWorkout(selectedId)).then(() => {
        fetchAllWorkout();
      });
    }
  };

  //Fetching of all workouts
  useEffect(() => {
    dispatch(fetchAllWorkout());
  }, []);

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
                onClick={() => handleDeleteWorkout(workout._id)}
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
