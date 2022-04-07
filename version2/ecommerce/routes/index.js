var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const arrayOfArray = require("../utils/arrayOfArray");
const Cart = require('../models/schema/cart');
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

router.get("/add-to-cart/:id", async (req, res, next) => {
  const productId = req.params.id;
  const isAnyCart = req.session.cart ? req.session.cart : {};
  const cart = new Cart(isAnyCart);
  try {
    const product = await Product.findById(productId);
    cart.add(product, productId);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
    

  } catch (error) {
    console.log("error en add-to-cart----------",error);
    return res.redirect('/');
  }
});

module.exports = router;
