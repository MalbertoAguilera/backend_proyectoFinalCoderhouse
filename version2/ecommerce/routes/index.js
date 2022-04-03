var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const arrayOfArray=require('../utils/arrayOfArray');

/* GET home page. */
router.get("/", async (req, res, next) => {
  const products = await Product.find();
  const productsPerRow = arrayOfArray(products);
    res.render("shop", { products: productsPerRow, title:"Shopping Cart" });
});


module.exports = router;
