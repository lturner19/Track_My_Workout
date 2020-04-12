let Workout = require("../models/userWorkout")

module.exports = function(app){

  app.get("/api/workouts", (req, res)=>{


  });
  
  app.put("/api/workouts/:id", (req, res) => {
  
  
  });
  
  app.post("/api/workouts", (req, res)=>{
  
  });
  

app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(data =>{
      res.json(data);  
    }).catch(err=> {
        res.send(err);
    })
});

};