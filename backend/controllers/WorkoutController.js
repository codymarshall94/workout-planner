const Workout = require("../models/Workout");

// @desc    Get all workouts
// @route   GET /workout
// @access  Public
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    };

// @desc    Post a workout
// @route   POST /workout
// @access  Public
const postWorkout = async (req, res) => {
    try {
        const workout = new Workout({
            dayOfWeek: req.body.dayOfWeek,
            exercises: req.body.exercises,
        });
        await workout.save();
        res.json(workout);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    };

module.exports = { getWorkouts, postWorkout };