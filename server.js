// Import required modules
var http = require("http");
var url = require("url");

// Package server code into a single function for exporting
function start(route, handle) {
	// Function for handling server connections
	function onRequest(request, response) {
		// Initialize variable for POST data
		var postData = "";
		
		// Parse the url for the pathname
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		// Route server
		route(handle, pathname, response, request);
	}
	// Initialize the HTTP server for the application project
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
