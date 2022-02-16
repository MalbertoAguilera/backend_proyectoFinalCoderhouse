const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
//routes
const routesLogin = require('./routes/index')

//initializations
const app = express();
require('./database');
require('./passport/local-auth');

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', 3000 || process.env.PORT);


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
app.use(routesLogin)

//starting the server
app.listen(app.get('port'), () => {
      console.log('Server on port', app.get('port'));
})