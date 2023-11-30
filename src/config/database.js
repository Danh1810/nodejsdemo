const mysql    = require('mysql2/promise');
  const connection =   mysql. createPool ({
    host     : 'localhost',
    port     : 3307,
    user     : 'root',
    password : '123456',
    database : 'danh'
  });
  module.exports = connection;