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

    insertOne: function (cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.selectAll("burgers", condition, function(res){
            cb(res);
        });
    },
};
module.exports = burger;