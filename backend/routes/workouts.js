const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//* GET all workouts
router.get("/", getAllWorkouts);

//* GET a specific workout
router.get("/:id", getSingleWorkout);

//* POST a new workout
router.post("/", createWorkout);

//* UPDATE a workout
router.patch("/:id", updateWorkout);

//* DELETE a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
