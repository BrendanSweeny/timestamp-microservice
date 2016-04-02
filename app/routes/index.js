"use strict";

var parseDate = require(process.cwd() + "/app/controllers/dateParser.server.js");

module.exports = function(app) {
    
    //Sends index.html
    app.get("/", function(req, res) {
        res.sendFile(process.cwd() + "/public/index.html");
    });
    
    //Creates and sends JSON object
    app.get("/:input", function(req, res) {
        var input = req.params.input;
        console.log(input);
        var date = parseDate(input);
    
	    res.send(date);
    });
    
}