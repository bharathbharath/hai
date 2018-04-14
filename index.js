var express = require("express");
var app = express();
app.listen("8899", function(error){
    if(error){
console.log("port not working");
    }else{
console.log("port working on 8899");
    }
});

// mysql connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
// end connection
// registration
app.post("/user/registration", function(req,res){
    res.send("registration success");
});
// login
app.post("/user/login", function(req,res){
    res.send("login  success");
});
// view profile
app.get("/user/viewprofile", function(req,res){
    res.send("viewprofile success");
});
// edit profile
app.post("/user/editprofile", function(req,res){
    res.send("editprofile success");
});
// change password
app.post("/user/changepassword", function(req,res){
    res.send("change password success");
});