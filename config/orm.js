var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, colInput, newValue){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colInput, newValue], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, updateColInput, newValue, referenceCol, referenceVal){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, updateColInput, newValue, referenceCol, referenceVal], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;