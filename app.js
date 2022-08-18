var express = require("express");
//import express from "express";
var app = express();

/*
app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    });
*/

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });

let todoitems = [];

app.post("/add", async function(req, res){
    let todoItemName = req.query.todoItemName;
    todoitems.push(todoItemName);

    res.send("Added to do item: " + todoItemName);

    console.log(todoItemName);
});

app.get("/gettodo", async function(req, res) {
    res.send(todoitems);
});