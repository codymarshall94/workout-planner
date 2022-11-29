const mongoose = require("mongoose");
require("dotenv").config();

const workoutSchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        required: true,
    },
    exercises: {
        type: Array,
        required: true,
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;