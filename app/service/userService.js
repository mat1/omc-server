var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('Users', userSchema);

exports.findAll = function(callback) {
  User.find({}, callback);
};

exports.findByName = function(name, callback) {
  User.findOne({'name': name}, function(err, person) {
    callback(err, person);
  });
};

exports.add = function(name, callback) {
  var user = new User({name: name});
  user.save(callback);
};

exports.removeAll = function(callback) {
  User.remove({}, callback);
};