import api from "../apiHandler";

export const updateWorkout = async (id, objectData) => {
  try {
    const response = await api.patch(`/api/workouts/${id}`, objectData);
    return response.data;
  } catch (err) {
    throw new Error(`Failed to update workout: ${err.message}`);
  }
};
