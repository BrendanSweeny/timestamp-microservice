"use strict";

var express = require("express");
var routes = require("./app/routes/index.js");

var app = express();

//Binds the public directory path to '/path' for use in index.html
app.use('/public', express.static(process.cwd() + '/public'));
//Binds the controllers directory to '/controllers' for use in index.html
//if an 'example' button were added in the future
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

//Passes express object for routing on index.js
routes(app);

//listens to port assigned in .env (heroku) or 8080 locally
app.listen(process.env.PORT || 8080, function() {
    console.log("Server listening on port 8080...");
});