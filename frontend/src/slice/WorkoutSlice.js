import { createSlice } from "@reduxjs/toolkit";
import { createWorkout } from "../api/workoutApi/createWorkout";
import { deleteWorkout } from "../api/workoutApi/deleteWorkout";
import { fetchAllWorkout } from "../api/workoutApi/FetchAllWorkout";

const initialState = {
  workouts: [],
  isLoading: false,
  error: null,
};

const WorkoutSlice = createSlice({
  initialState,
  name: "workout",
  extraReducers(builder) {
    //FETCHING OF ALL WORKOUT
    builder.addCase(fetchAllWorkout.pending, (state) => {
      state.workouts = [];
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchAllWorkout.fulfilled, (state, action) => {
      state.workouts = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchAllWorkout.rejected, (state) => {
      state.workouts = [];
      state.isLoading = false;
      state.error = "Fetch error";
    });

    //CREATE A NEW WORKOUT
    builder.addCase(createWorkout.pending, (state) => {
      state.workouts = [];
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(createWorkout.fulfilled, (state, action) => {
      state.workouts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(createWorkout.rejected, (state) => {
      state.workouts = [];
      state.isLoading = false;
      state.error = "Fetch error";
    });
    //DELTE A  WORKOUT
    builder.addCase(deleteWorkout.pending, (state) => {
      state.workouts = [];
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteWorkout.fulfilled, (state, action) => {
      state.workouts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteWorkout.rejected, (state) => {
      state.workouts = [];
      state.isLoading = false;
      state.error = "Fetch error";
    });
  },
});

export const WorkoutReducer = WorkoutSlice.reducer;
