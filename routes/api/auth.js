const router = require("express").Router();
const userController = require("../../controllers/userController");

const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../../models/user');
const { forwardAuthenticated } = require('../../config/auth');


// // Matches with "/api/login"
// router.route("/login")
//     .get(userController.findAll)
//     .post(userController.findAll);
// Login
router.post('/login',
    passport.authenticate('local'),
    (req, res, next) => {
        console.log("auth success", req.user)
        const { _id, name, email } = req.user;
        res.send({ _id: _id, name: name, email: email });
    }
);

router.post('/signup', (req, res) => {
    console.log('/api/auth/signup called', req.body);
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => {
                    req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                    );
                    res.redirect('/users/login');
                })
                .catch(err => console.log(err));
        });
    });

});

router.route("/register")
    .post(userController.create);

// // Matches with "/api/records/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;