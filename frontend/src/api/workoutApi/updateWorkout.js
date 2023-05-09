import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiHandler";

export const updateWorkout = createAsyncThunk(
  "/workout/get-all-workout",
  async (data) => {
    try {
      const response = await api.put(`/api/workouts/${data.id}`, data);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
