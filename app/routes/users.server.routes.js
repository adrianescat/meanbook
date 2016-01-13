var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true
     }));

  app.get('/signout', users.signout);

  //Para empezar con el proceso de autentificacion
  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    scope: 'email'
  }));
  //Para finalizar con el proceso una vez que el usuario linkeo su cuenta
  app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/signin',
    successRedirect: '/',
    scope: 'email'
  }));
};