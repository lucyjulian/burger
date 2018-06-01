var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableInput, colInput, newValue, col2, val2, cb){
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInput, colInput, newValue, col2, val2], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableInput, updateColInput, newValue, referenceCol, referenceVal, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, updateColInput, newValue, referenceCol, referenceVal], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;