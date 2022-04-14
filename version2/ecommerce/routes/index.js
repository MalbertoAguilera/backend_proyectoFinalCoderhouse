const express = require("express");
const router = express.Router();
const { mustSignIn } = require("../utils/auth");
const csurfProtection = require("csurf")();
const {
  showProducts,
  showShoppingCart,
  addItem,
  checkoutAccepted,
} = require("../controllers/index.controller");

router.use(csurfProtection);
router.get("/", showProducts);
router.get("/add-to-cart/:id", addItem);
router.get("/shopping-cart", showShoppingCart);
router.get("/checkout", mustSignIn, checkoutAccepted);

module.exports = router;
