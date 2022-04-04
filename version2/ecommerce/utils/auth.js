const isLoggedIn = (req,res,next) => {
      if(req.isAuthenticated()){
            return next()
      }
      res.redirect('/')
};

const isNotLoggedIn = (req,res,next) => {
      if(!req.isAuthenticated()){
            return next()
      }
      res.redirect('/')
};

module.exports = {isLoggedIn, isNotLoggedIn};
