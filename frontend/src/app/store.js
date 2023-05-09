import { configureStore } from "@reduxjs/toolkit";
import { WorkoutReducer } from "../slice/WorkoutSlice";

const store = configureStore({
  reducer: {
    workout: WorkoutReducer,
  },
});

export default store;
