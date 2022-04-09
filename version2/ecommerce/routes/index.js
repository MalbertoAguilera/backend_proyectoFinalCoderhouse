var express = require("express");
var router = express.Router();
const Product = require("../models/schema/product");
const Cart = require("../models/schema/cart");
const Order = require("../models/schema/order");
const arrayOfArray = require("../utils/arrayOfArray");
const csurf = require("csurf");

const csurfProtection = csurf();
router.use(csurfProtection);

router.get("/", async (req, res, next) => {
  const successMsg = req.flash("success")[0];
  const products = await Product.find();
  const threeProductsPerPosition = arrayOfArray(products);

  res.render("shop", {
    products: threeProductsPerPosition,
    title: "Shopping Cart",
    successMsg: successMsg,
    noMsg: !successMsg,
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
    res.redirect("/");
  } catch (error) {
    return res.redirect("/");
  }
});

router.get("/shopping-cart", (req, res, next) => {
  if (!req.session.cart.items) {
    return res.render("shoppingCart", {
      products: null,
      title: "Cart",
    });
  }

  const cart = new Cart(req.session.cart);
  res.render("shoppingCart", {
    title: "Cart",
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
  });
});

router.get("/checkout", async (req, res, next) => {
  const cart = new Cart(req.session.cart);
  const order = new Order({
    user: req.user,
    email: req.user.email,
    cart,
  });

  try {
    await order.save();
    req.flash("success", "Succesfully bought products");
    req.session.cart = null;
    console.log(req.session.cart);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
