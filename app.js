const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();

const server = require('http').createServer(app).listen(3000);
//const io = require('socket.io')(server);


mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function(model) {
  require(model);
});

module.exports = require('./config/express')(app, config);




// app.listen(config.port, () => {
//   console.log('Express server listening on port ' + config.port);
// });
