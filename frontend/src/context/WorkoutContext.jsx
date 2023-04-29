import { createContext, useEffect, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workoutData, setWorkoutData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("" || 0);
  const [load, setLoad] = useState("" || 0);

  //* Adding a new workout
  const handleAddData = async (e) => {
    e.preventDefault();
    const reqBody = { title, reps, load };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    if (response.ok) {
      setWorkoutData(jsonResponse);
    }
  };

  //* Deleting a workout
  const handleDeleteData = async (workoutID) => {
    if (window.confirm("Are you sure do you want to delete this workout?")) {
      const response = await fetch(`/api/workouts/${workoutID}`, {
        method: "DELETE",
      });
      const jsonResponse = await response.json();
      if (response.ok) {
        setWorkoutData(jsonResponse);
      }
    } else {
      return;
    }
  };

  //* Fetching of workout data
  const handleFetchData = async () => {
    setIsLoading(true);
    const response = await fetch("/api/workouts");
    const jsonResponse = await response.json();
    if (response.ok) {
      setWorkoutData(jsonResponse);
      setIsLoading(false);
    }
    if (!response.ok) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const contextValues = {
    handleDeleteData,
    handleAddData,
    workoutData,
    isLoading,
    title,
    setTitle,
    reps,
    setReps,
    load,
    setLoad,
  };
  return (
    <WorkoutContext.Provider value={contextValues}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext;
