/* import the following:
Express
burger.js */
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req,res){
burger.selectAll(function(data){
    var hdbrsObj ={
        burgers: data
    }
    console.log(hdbrsObj);
    res.render("index", hdbrsObj)
});

router.post("/api/burgers", function(req,res){
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger.burger_name, req.body.devoured],
        function(result){
            res.json({id: result.insertId})
        } 
    );
});

router.put("/api/burgers/:id", function(res,req){
    var condition = "id =" + res.params,id;

    console.log("condition", condition);
    burger.updateOne({devoured: req.body.devoured}, condition, function(result){
        if (result,changedRows === 0) {
            return res.status(404, "All Set!").end();
        } else {
            return res.status(200, "OOPS...").end();
        }
    });
});

router.deleteOne(condition, function(req,res){
    var condition = "id =" + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result){
        if ((result, changedRows === 0)){
            return res.status(404, "Deleted").end();
        } else {
            res.status(200, "OOPS...").end();
        } 
    });
});
});

module.exports = router;
