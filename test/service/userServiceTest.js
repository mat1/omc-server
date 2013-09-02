var asnyc = require('async');
var config = require('../../config/test');
var db = require('../../app/db/db')(config);

var userService = require('../../app/service/userService');

module.exports = {
  setUp: function(callback) {
    userService.removeAll(function(err) {
      callback();
    });
  },
  tearDown: function(callback) {
    // clean up
    callback();
  },
  testFindByName: function(test) {
    test.expect(1);
    userService.add('Matthias', function() {
      userService.findByName('Matthias', function(err, user) {
        test.equal(user.name, 'Matthias');
        test.done();
      });
    });
  },
  testFindAll: function(test) {
    test.expect(2);

    userService.add('Matthias', function() {
      userService.findAll(function(err, users) {
        test.equal(users.length, 1);
        test.equal(users[0].name, 'Matthias');
        test.done();
      });
    });
  }
};
