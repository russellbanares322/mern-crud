import api from "../apiHandler";

export const createWorkout = async (objectData) => {
  const { data } = await api.post("/api/workouts/", objectData);
  return data;
};
