
const Product = require("../models/schema/Product");
const Cart = require("../models/schema/Cart");
const Order = require("../models/schema/Order");
const arrayOfArray = require("../utils/arrayOfArray");
const { sendMailNewUser, sendMailSuccessOrder } = require("../utils/sendMail");

const showProducts = async (req, res, next) => {
  const successMsg = req.flash("success")[0];
  const products = await Product.find();
  const threeProductsPerPosition = arrayOfArray(products);

  res.render("shop", {
    products: threeProductsPerPosition,
    title: "Shopping Cart",
    successMsg: successMsg,
    noMsg: !successMsg,
  });
};

const addItem = async (req, res, next) => {
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
};

const showShoppingCart = (req, res, next) => {
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
};

const checkoutAccepted = async (req, res, next) => {
  const cart = new Cart(req.session.cart);
  const order = new Order({
    user: req.user,
    email: req.user.email,
    cart,
    cartToArray: cart.generateArray(),
  });

  try {
    await order.save();
    sendMailSuccessOrder(order);
    req.flash("success", "Compra realizada de forma exitosa");
    req.session.cart = null;
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { showProducts, addItem, showShoppingCart, checkoutAccepted };
