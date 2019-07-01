const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sixFeetUnderDB",
    { useNewUrlParser: true }
);

const userSeed = [
    {
        name: "anton",
        email: "anton@gmail.com",
        password: "123456",
        date: new Date(Date.now())
    },
    {
        name: "bruce",
        email: "bruce@gmail.com",
        password: "123456",
        date: new Date(Date.now())
    }
]

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " users inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


