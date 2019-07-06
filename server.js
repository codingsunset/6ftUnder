const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport'); // for authentication, using passport-local strategy
const flash = require('connect-flash'); // for flash messaging
const session = require('express-session'); // connect-flash depends on express-session
const expressLayouts = require('express-ejs-layouts'); // template engine, temporary
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("client/public"));

// Serve up static assets (usually on heroku)
// <<<<<<< passport
// Connect to the Mongo DB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/sixFeetUnderDB",
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
// =======
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// } else {
//   app.use(express.static("client/public"));
// }
// // Add routes, both API and view
// app.use(routes);
// >>>>>>> dev3
// mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds339177.mlab.com:39177/heroku_ntjjp090");

// Passport Config
require('./config/passport')(passport);
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Connect flash
app.use(flash());
// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// temporarily following the tutorial to
// use ejs view engine to serve authentication pages
// to be integrated into react
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Add routes, both API and view
// const routes = require("./routes/api");
// console.log(routes)
app.use('/api/records', require("./routes/api/records"));
app.use('/api/auth', require("./routes/api/auth"));
// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

// Start the API server
const PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});
