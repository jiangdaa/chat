const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'chat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'chat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'chat'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/chat-production'
  }
};

module.exports = config[env];
