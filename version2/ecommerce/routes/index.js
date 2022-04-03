var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const arrayOfArray = require("../utils/arrayOfArray");
const csurf = require("csurf");
const passport = require("passport");

const csurfProtection = csurf();
router.use(csurfProtection);

router.get("/", async (req, res, next) => {
  const products = await Product.find();
  const threeProductsPerPosition = arrayOfArray(products);
  res.render("shop", {
    products: threeProductsPerPosition,
    title: "Shopping Cart",
  });
});

router.get("/user/signup", async (req, res, next) => {
  const messages = req.flash("error");
  res.render("signUp", {
    csurfToken: req.csrfToken(),
    title: "SignUp",
    messages: messages,
    hasErrors: messages.length > 0,
  });
});

router.post(
  "/user/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/user/signup",
    failureFlash: true,
  })
);

router.get("/profile", (req, res, next) => {
  res.render("profile", { title: "Profile" });
});

module.exports = router;
