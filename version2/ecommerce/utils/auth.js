const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};


const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

const mustSignIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = '/shopping-cart';
  req.flash("checkoutMsg", "Para finalizar su compra debe Registrarse");
  res.redirect("/user/signin");
};

const successCheckoutRedirect = (req, res, next) => {
  //middleware en caso exitoso de passport
  if (req.session.oldUrl) {
    const oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    //si el sign in NO es desde el checkout
    res.redirect("/user/profile");
  }
};

const successAdminRedirect = (req, res, next) => {
  console.log(req.user.role === "admin");
  if (req.user.role === "admin") {
    return res.redirect('/admin/listar-productos');
  }
  next();
};

module.exports = { isLoggedIn, isNotLoggedIn, mustSignIn, successCheckoutRedirect, successAdminRedirect };
