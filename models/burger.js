/* import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file. */

var orm = require("../config/orm");

var burger = {
selectAll: function (cb) {
    orm.selectAll("burgers", function(res){
        cb(res);
    });
},

    insertOne: function (table, cols, vals, cb) {
        orm.insertOne(table, cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    },
};
module.exports = burger;