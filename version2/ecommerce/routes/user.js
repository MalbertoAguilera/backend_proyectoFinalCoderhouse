const express = require("express");
const router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  successCheckoutRedirect,
  successAdminRedirect,
} = require("../utils/auth");
const passport = require("passport");
const {
  showOrders,
  finishSession,
  showSignUp,
  showSignIn,
} = require("../controllers/user.controller");
const csurfProtection = require("csurf")();

router.use(csurfProtection);
//rutas protegidas
router.get("/profile", isLoggedIn, showOrders);
router.get("/logout", isLoggedIn, finishSession);

//Middleware para rutas de acceso publico
router.use("/", isNotLoggedIn, (req, res, next) => {
  next();
});

router.get("/signup", showSignUp);
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    failureRedirect: "/user/signup",
    failureFlash: true,
  }),
  successCheckoutRedirect
);

router.get("/signin", showSignIn);
router.post(
  "/signin",
  passport.authenticate("local-signIn", {
    failureRedirect: "/user/signin",
    failureFlash: true,
  }),
  successAdminRedirect,
  successCheckoutRedirect
);

module.exports = router;
