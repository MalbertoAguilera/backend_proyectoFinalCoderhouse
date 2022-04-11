const { Passport } = require("passport");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/schema/User");
const { sendMailNewUser } = require("../utils/sendMail");

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
      req
        .checkBody("password", "invalid PASSWORD")
        .notEmpty()
        .isLength({ min: 4 });
      var errors = req.validationErrors();

      if (errors) {
        const messages = [];
        errors.forEach((error) => {
          messages.push(error.msg);
        });
        return done(null, false, req.flash("error", messages));
      }

      const user = await User.findOne({ email: email });
      req.checkBody("email", "invalid email").notEmpty();
      req.checkBody("password", "invalid PASSWORD").notEmpty();
      var errors = req.validationErrors();

      if (errors) {
        const messages = [];
        errors.forEach((error) => {
          messages.push(error.msg);
        });
        console.log(messages);
        return done(null, false, req.flash("error", messages));
      }
      //express validator

      if (user) {
        return done(null, false, {
          message: "El email ya se encuentra registrado",
        });
      } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.role = "user";
        sendMailNewUser(newUser);
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  "local-signIn",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(
          null,
          false,
          {message: "No se encontro el usuario"}
        );
      }

      if (!user.comparePassword(password)) {
        return done(
          null,
          false,
          {message: "Contraseña incorrecta"}
        );
      }

      done(null, user);
    }
  )
);
