import api from "../apiHandler";

export const updateWorkout = async (id, objectData) => {
  const { data } = await api.put(`/api/workouts/${id}`, objectData);
  return data;
};
