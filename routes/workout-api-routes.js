let db = require("../models")

module.exports = function (app) {

  // Route 1 (last workout)
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  });

  //Route 2 (add exercise)
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id }, { $push: { exercises: req.body } },
      function (err, success) {
        if (err) {
          console.log(err);
        } else {
          console.log(success);
          res.json(success)
        }
      });
  });

  //Route 3 (create workout)
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  });


  //Route 4 (get 7 day workout range)
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).sort({ "day": 1 }).limit(7).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  });
};