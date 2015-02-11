var express = require('express');
var router = express.Router();
var passport = require('passport');

module.exports = function(passport) {
  router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({"error": info.message});
      }
      res.status(200).json({message: "Hejsa"});
    });
  });
  return router;
};

