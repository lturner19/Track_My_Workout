const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   day: {
       date: Date
   },
   
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please choose resistance or cardio"
        },

        name: {
            type: String,
            trim: true,
            required: "Please enter name of exercise"
        },
        duration: {
            type: Number,
            min: 0,
            required: "Please enter a number"
        },

        weight: {
            type: Number,
            min: 1
        },

        reps: {
            type: Number,
            min: 1
        },

        sets: {
            type: Number,
            min: 1
        },

        distance: {
            type: Number,
            min: 1
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;