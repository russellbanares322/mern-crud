import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiHandler";

export const fetchAllWorkout = createAsyncThunk(
  "/workout/get-all-workout",
  async () => {
    try {
      const response = await api.get("/api/workouts");
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
