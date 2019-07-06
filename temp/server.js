const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 7000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
.connect(process.env.MONGODB_URI || "mongodb://localhost/sixFeetUnderDB",
{ useNewUrlParser: true})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds339177.mlab.com:39177/heroku_ntjjp090");
// mongoose.connect(process.env.MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
