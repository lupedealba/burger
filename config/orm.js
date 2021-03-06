//const connection = require("./connection.js");

//Import
var connection = require('../config/connection.js')

var orm =
{

	//Select All
	selectAll: function(callback)
	{
		//mySQL Query
		connection.query('SELECT * FROM burgers', function(err, result)
		{
			if (err) throw err;
			callback(result);
		});
	},

	//Insert One
	insertOne: function(burger_name, callback)
	{
		connection.query('INSERT INTO burgers SET ?',
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	},

	//Update One
	updateOne: function(burgerID, callback)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	}
};

//Export
module.exports = orm;