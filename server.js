const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//code = if deployed use deployed DB or use the local db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

//connecting to MongoDB
mongoose.connect(MONGODB_URI);

//importing the html and api routes
require("./routes/html-routes")(app);
require("./routes/workout-api-routes")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
