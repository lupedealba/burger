var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    //port: 3306,
    //user: process.env.WEBSITE_USER,
    //password: process.env.WEBSITE_PASSWORD,
    user: 'root',
    password: 'bidibidi10883!',
    database: 'burgers_db'
  });

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
