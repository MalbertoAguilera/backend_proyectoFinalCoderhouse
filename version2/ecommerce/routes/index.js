var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const arrayOfArray=require('../utils/arrayOfArray');
const csurf =require('csurf');

const csurfProtection= csurf();
router.use(csurfProtection)

/* GET home page. */
router.get("/", async (req, res, next) => {
  const products = await Product.find();
  const threeProductsPerPosition = arrayOfArray(products);
    res.render("shop", { products: threeProductsPerPosition, title:"Shopping Cart" });
});

router.get("/user/signup", async (req, res, next) => {
  res.render('signUp', {csurfToken: req.csrfToken(), title:"SignUp"});
})
router.post("/user/signup", async (req, res, next) => {
  res.redirect('/');
})


module.exports = router;
