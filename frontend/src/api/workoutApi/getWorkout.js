import api from "../apiHandler";

export const getWorkout = async (id) => {
  const { data } = await api.get(`/api/workouts/${id}`);
  return data;
};
