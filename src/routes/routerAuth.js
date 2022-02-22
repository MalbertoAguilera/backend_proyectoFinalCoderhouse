const express = require('express');
const passport = require('passport');
const router = express.Router();
const {transporter, mailOptions} = require('../nodeMailer/config');
const {client, options} = require('../twilio/config');
const isAuthenticated = require('../auth/objectAuth');


router.get('/',(req, res, next) => {
      res.render('index');
})

router.post('/twilio', async (req, res) => {
      try {
            let info = await client.messages.create(options);
            console.log(info);
            res.send({data:info})
      } catch (error) {
            console.log(error);
      }
})

router.post('/nodemailer', async (req, res) => {
      try {
            let info = await transporter.sendMail(mailOptions)
            console.log(info);
            res.send(`email enviado a ${mailOptions.to}`)
      } catch (error) {
            console.log(error);
      }
})


router.get('/signup', (req, res, next) => {
      res.render('signup');
})

router.post('/signup', passport.authenticate('local-signup',{
      successRedirect:'/profile',
      failureRedirect:'/signup',
      passReqToCallback: true

}))

router.get('/signin', (req, res, next) => {
      res.render('signIn');
})

router.post('/signin', passport.authenticate('local-signin',{
      successRedirect: '/profile',
      failureRedirect:'/signin',
      passReqToCallback:true
}))

//MIDDLEWARE DE USUARIOS AUTENTICADOS
//DE ACA EN ADELANTE SOLO ACCEDEN SI ESTAN LOGUEADOS
router.use((req, res, next) => {
      isAuthenticated(req, res, next);
})

router.get('/profile', (req, res, next) => {
      console.log("llegue a profile---------------");
      res.render('profile');
})

router.get('/logout', (req, res, next) => {
      req.logOut();
      res.redirect('/');
})

module.exports = router;