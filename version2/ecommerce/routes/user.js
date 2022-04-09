var express = require("express");
var router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  successCheckoutRedirect,
} = require("../utils/auth");
const passport = require("passport");
const csurf = require("csurf");

const csurfProtection = csurf();
router.use(csurfProtection);

//ruta protegida
router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile", {
    title: "Profile",
  });
});

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

//Middleware para rutas de acceso publico
router.use("/", isNotLoggedIn, (req, res, next) => {
  next();
});

router.get("/signup", async (req, res, next) => {
  const messages = req.flash("error");
  res.render("signUp", {
    csurfToken: req.csrfToken(),
    title: "SignUp",
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    failureRedirect: "/user/signup",
    failureFlash: true,
  }),
  successCheckoutRedirect
);

router.get("/signin", async (req, res, next) => {
  const checkoutMsg = req.flash("checkoutMsg")[0];
  const messages = req.flash("error");
  res.render("signIn", {
    csurfToken: req.csrfToken(),
    title: "Signin",
    messages: messages,
    hasErrors: messages.length > 0,
    checkoutMsg,
    noMsg: !checkoutMsg,
  });
});

router.post(
  "/signin",
  passport.authenticate("local-signIn", {
    failureRedirect: "/user/signin",
    failureFlash: true,
  }),
  successCheckoutRedirect
);

module.exports = router;
