let mongoose = require("mongoose");
//can use this now that index.js in models folder has been created
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//startup data that is inserted into workout db
//this is the type of info that will be coming from the UI
let workoutSeed = [
  {//remember to put in day when creating schema
    day: new Date().setDate(new Date().getDate()-10),
    //the exercises is an array!
    exercises: [
      {//Thursday (sunday)
        type: "resistance",
        name: "Bicep Curl",
        weight: 100,
        sets: 4,
        reps: 10,
        duration: 20
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      { //Friday (monday)
        type: "resistance",
        name: "Lateral Pull",
        weight: 300,
        sets: 4,
        reps: 10,
        duration: 20
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {//Saturday  (tuesday)
        type: "resistance",
        name: "Push Press",
        weight: 185,
        sets: 4,
        reps: 8,
        duration: 25
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {//Sunday (wed)
        type: "cardio",
        name: "Running",
        distance: 4,
        duration: 25
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {//Monday (thurs)
        type: "resistance",
        name: "Bench Press",
        weight: 285,
        sets: 4,
        reps: 10,
        duration: 20
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {//Tuesday (friday)
        type: "resistance",
        name: "Bench Press",
        weight: 300,
        sets: 4,
        reps: 10,
        duration: 20
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {//Wed. (saturday)
        type: "resistance",
        name: "Quad Press",
        weight: 300,
        sets: 4,
        reps: 10,
        duration: 30
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {//Thurs (sunday)
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {//Friday (monday)
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {//Saturday (tues)
        type: "cardio",
        name: "Walking",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
