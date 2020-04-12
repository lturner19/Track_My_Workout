let db = require("../models")

module.exports = function (app) {

  // Route 1 (last workout)
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    })
  });

  //Route 2 (add exercise)
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },  { $push: { exercises: req.body} },
     function (error, success) {
           if (error) {
               console.log(error);
           } else {
               console.log(success);
               res.json(success)
           }
       });
  });

  //Route 3 (create workout)
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(data =>{
      res.json(data);
    })
  });

};