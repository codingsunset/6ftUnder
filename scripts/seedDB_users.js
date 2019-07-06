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
        password: "$2a$10$N6WweL7QRqS2S5E2mDOXvuHb1V.GFKqftw1aFqJ6igPlTQ1nOvnfC",
        date: new Date(Date.now())
    },
    {
        name: "bruce",
        email: "bruce@gmail.com",
        password: "$2a$10$N6WweL7QRqS2S5E2mDOXvuHb1V.GFKqftw1aFqJ6igPlTQ1nOvnfC",
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


