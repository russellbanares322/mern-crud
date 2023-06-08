import api from "../apiHandler";

export const getAllWorkout = async () => {
  const { data } = await api.get("/api/workouts");
  return data;
};
