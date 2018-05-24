var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(newBurgerName, cb) {
        orm.insertOne("burgers", "burger_name", newBurger, function(res){
            cb(res);
        });
    },
    devour: function(burgerID, cb){
        orm.updateOne("burgers", "devoured", "true", "id", burgerID, function(res){
            cb(res);
        });
    }
};

module.exports = burger;

