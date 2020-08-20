const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static('public'));


app.get("/index.html",function(request, response){
    response.sendFile(__dirname  + "/index.html");

});
app.get("/",function(request, response){
    response.sendFile(__dirname  + "/login.html");
});
app.get("/login.html",function(request, response){
    response.sendFile(__dirname  + "/login.html");

});

app.get("/forgot-password.html",function(request, response){
    response.sendFile(__dirname  + "/forgot-password.html");

});



app.get("/posts.html",function(request, response){
    response.sendFile(__dirname  + "/posts.html");

});

app.get("/users.html",function(request, response){
    response.sendFile(__dirname  + "/users.html");

});


app.get("/deleted_posts.html",function(request, response){
    response.sendFile(__dirname  + "/deleted_posts.html");

});
app.listen(3000,function(){
      console.log("Server started at 3000");
});
