import api from "../apiHandler";

export const deleteWorkout = async (id) => {
  await api.delete(`/api/workouts/${id}`);
};
