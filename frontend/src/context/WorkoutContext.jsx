import { createContext, useEffect, useState } from "react";
import { getAllWorkout } from "../api/workoutApi/getAllWorkout";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workoutData, setWorkoutData] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const fetchAllWorkout = async () => {
    const workouts = await getAllWorkout();
    setWorkoutData(workouts);
  };

  //Fetching of all workouts
  useEffect(() => {
    fetchAllWorkout();
  }, []);

  return (
    <WorkoutContext.Provider
      value={{
        selectedWorkout,
        setSelectedWorkout,
        workoutData,
        setWorkoutData,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext;
