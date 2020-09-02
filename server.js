const PORT= process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.use(express.static('public'));


app.get("/index.html", function(request, response) {
    response.sendFile(__dirname + "/index.html");

});
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/login.html");
});
app.get("/login.html", function(request, response) {
    response.sendFile(__dirname + "/login.html");

});

app.get("/forgot-password.html", function(request, response) {
    response.sendFile(__dirname + "/forgot-password.html");

});



app.get("/posts.html", function(request, response) {
    response.sendFile(__dirname + "/posts.html");

});

app.get("/events.html", function(request, response) {
    response.sendFile(__dirname + "/events.html");

});
app.get("/quiz.html", function(request, response) {
    response.sendFile(__dirname + "/quiz.html");

});
app.get("/article.html", function(request, response) {
    response.sendFile(__dirname + "/article.html");

});
app.get("/allposts.html", function(request, response) {
    response.sendFile(__dirname + "/allposts.html");

});

app.get("/users.html", function(request, response) {
    response.sendFile(__dirname + "/users.html");

});


app.get("/deleted_posts.html", function(request, response) {
    response.sendFile(__dirname + "/deleted_posts.html");


});
app.get("/Blocked_users.html", function(request, response) {
    response.sendFile(__dirname + "/Blocked_users.html");
});

app.get("/transaction.html", function(request, response) {
    response.sendFile(__dirname + "/transaction.html");
});

app.get("/sports.html", function(request, response) {
    response.sendFile(__dirname + "/sports.html");
});

app.get("/questions.html", function(request, response) {
    response.sendFile(__dirname + "/questions.html");
});
app.listen(PORT ,function(){
      console.log("Server started at 3000");
});
