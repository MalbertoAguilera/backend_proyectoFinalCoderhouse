const Order = require("../models/schema/Order");

const showOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user });
    res.render("profile", { title: "profile", orders });
  } catch (error) {
    console.log(error);
  }
};

const finishSession = (req, res) => {
  req.logOut();
  res.redirect("/");
};

const showSignUp = async (req, res) => {
  const messages = req.flash("error");
  res.render("signUp", {
    csurfToken: req.csrfToken(),
    title: "SignUp",
    messages: messages,
    hasErrors: messages.length > 0,
  });
};

const showSignIn = async (req, res, next) => {
  const checkoutMsg = req.flash("checkoutMsg")[0];
  const messages = req.flash("error");
  res.render("signIn", {
    csurfToken: req.csrfToken(),
    title: "Signin",
    messages: messages,
    hasErrors: messages.length > 0,
    checkoutMsg,
    noMsg: !checkoutMsg,
  });
};

module.exports = { showOrders, finishSession, showSignUp, showSignIn };
