var LocalStrategy = require('passport-local').Strategy;
var User = require('../schemas').User;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('login', new LocalStrategy( {
      passReqToCallback : true
    },
    function(username, password, done) {
      User.findOne({username: username}, function(err, user) {
        if (err) return done(err);
        if (!user) {
          User.findOne({email: username}, function(err, user) {
            if (err) return done(err);
            if (!user) return done(null, false, { message: 'Invalid username or password'} );
            user.comparePassword(password, function(err, isMatch) {
              if (err) return done(err);
              if (!isMatch) return done(null, false, { message: 'Invalid username or password'} );
              return done(null, user);
            });
          });
        }
        user.comparePassword(password, function(err, isMatch) {
          if (err) return done(err);
          if (!isMatch) return done(null, false, { message: 'Invalid username or password'} );
          return done(null, user);
        });
      });
    }
  ));

};
