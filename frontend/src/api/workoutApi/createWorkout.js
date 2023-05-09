import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiHandler";

export const createWorkout = createAsyncThunk(
  "/workout/create-workout",
  async (data) => {
    try {
      const response = await api.post("/api/workouts", data);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
