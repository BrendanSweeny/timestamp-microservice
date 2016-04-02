"use strict";

function parseDate(input) {
	var months = ["January", "February", "March", "April", "May", "June", "July",
					"August", "September", "October", "November", "December"];
    
    //The JSON to be returned
    var outputJSON = {
			"unix": null,
			"natural": null
	    };
	
	//Checks for a space in the input
	if (input.indexOf(" ") !== -1) {
		input = input.replace(/%20/g, function() {
			return " ";
		});		
	} else {
	    //converts unix timestamp in seconds to milliseconds
		input = Number(input) * 1000;
	}

	//Creates new Date object
	var date = new Date(input);
	
	//validate date
	if (date.getTime() > 0) {
		
		//converts back to seconds
		var unix = date.getTime() / 1000;
		//create natural date string
		var natural = months[date.getUTCMonth()] + " " + date.getUTCDate().toString() + ", " + date.getUTCFullYear().toString();
		
		outputJSON = {
			"unix": unix,
			"natural": natural
		};
		
	}
	return outputJSON;
}

module.exports = parseDate;