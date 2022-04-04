var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const expressValidator = require("express-validator");

const userRoutes = require("./routes/user");
var indexRouter = require("./routes/index");

var app = express();

//conexion a la base de datos
mongoose
  .connect(
    "mongodb+srv://matias:atlas1234@sessionatlas.jvq29.mongodb.net/backendProyectoFinal2?retryWrites=true&w=majority"
  )
  .then((db) => console.log("Database connected"));
require("./config/passport");

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//middlewares dependientes de session
app.use(
  session({
    secret: "mi super secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//session

//middleware para cambiar vista del nav
app.use((req, res, next) => {
  res.locals.isLogged = req.isAuthenticated();
  next();
});

//routes
app.use("/user", userRoutes);
app.use("/", indexRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
