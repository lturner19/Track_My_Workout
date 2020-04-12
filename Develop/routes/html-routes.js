//html-routes.js - this file offers a set of routes for sending users to the various html pages

//dependency
var path = require("path");

// Routes
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
    });

 
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};