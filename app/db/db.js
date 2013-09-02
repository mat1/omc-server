var mongoose = require('mongoose');

module.exports = Db;

function Db(config) {
  mongoose.set('debug', config.db.debug);
  mongoose.connect(config.db.url);
  
  mongoose.connection.on('error', function(err){
    console.error(err);
  });
}

