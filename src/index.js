const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const routerAuth = require('./routes/routerAuth')
const routerProducts = require('./routes/routerProducts')
const routerCart = require('./routes/routerCart')

//initializations
const app = express();
const PORT = 3000 || process.env.PORT;
require('./database');
require('./passport/local-auth');

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(session({
      secret:'miSecreto',
      resave: false,
      saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//evalua si hay un mensaje desde la ruta signup
app.use((req,res,next) => {
      app.locals.signupMessage = req.flash('signupMessage');
      app.locals.signinMessage = req.flash('signinMessage');
      app.locals.user = req.user;
      next();
})

//Routes
app.use(routerAuth);
app.use("/api/productos", routerProducts);
// app.use("/api/carrito", routerCart);
app.use(function (req, res, next) {
      res.status(404).json({
        error: -2,
        descripcion: `Ruta ${req.url}, metodo ${req.method} no implementada`
      });
    });

//starting the server
const server = app.listen(PORT, () => {
      console.log(`El servidor se encuentra escuchando por el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));
