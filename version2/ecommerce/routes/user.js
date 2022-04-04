var express = require("express");
var router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require("../utils/auth");
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

router.get('/logout', isLoggedIn, (req, res, next)=>{
      req.logOut();
      res.redirect('/')
})

//Middleware para rutas de acceso publico
router.use('/', isNotLoggedIn, (req,res,next)=>{
      next();
})

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
    successRedirect: "/user/profile",
    failureRedirect: "/user/signup",
    failureFlash: true,
  })
);

router.get("/signin", async (req, res, next) => {
  const messages = req.flash("error");
  res.render("signIn", {
    csurfToken: req.csrfToken(),
    title: "Signin",
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

router.post(
  "/signin",
  passport.authenticate("local-signIn", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signin",
    failureFlash: true,
  })
);


module.exports = router;
