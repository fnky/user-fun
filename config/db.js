var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-server', function (err) {
  if (err) throw err;
  console.log("Connected to mongodb");
});


// Test User
// var User = require('../schemas/User');

// var testUser = new User({
//   username: "chrs",
//   password: "hejsa123",
//   email: "c@c.dk"
// });

// testUser.save(function(err) {
//   if (err) throw err;
//   User.findOne({ username: 'chrs' }, function(err, user) {
//     if (err) throw err;

//     user.comparePassword('hejsa123', function(err, isMatch) {
//       if (err) throw err;
//       console.log('Password "hejsa123": ', isMatch);
//     });

//     user.comparePassword('wrong', function(err, isMatch) {
//       if (err) throw err;
//       console.log('Password "wrong"', isMatch);
//     });
//   });
// });

module.exports = mongoose.connection;
