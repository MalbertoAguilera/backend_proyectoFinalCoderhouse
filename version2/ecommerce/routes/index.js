var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const arrayOfArray = require("../utils/arrayOfArray");
const csurf = require("csurf");

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

module.exports = router;
