import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiHandler";

export const deleteWorkout = createAsyncThunk(
  "/workout/delete-workout",
  async (data) => {
    try {
      const response = await api.delete(`/api/workouts/${data._id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
