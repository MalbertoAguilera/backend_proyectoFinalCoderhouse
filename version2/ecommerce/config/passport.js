const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/schema/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      //express validator
      req.checkBody("email", "invalid email").notEmpty().isEmail();
      req.checkBody("password", "invalid PASSWORD").notEmpty().isLength({min:4});
      var errors = req.validationErrors();
      if (errors) {
        const messages = [];
        console.log(errors);
        errors.forEach((error) => {
          messages.push(error.msg);
        });
        console.log(messages);
        return done(null, false, req.flash("error", messages));
      }
      const user = await User.findOne({ email: email });
      if (user) {
        return done(null, false, {
          message: "El email ya se encuentra registrado",
        });
      } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);
