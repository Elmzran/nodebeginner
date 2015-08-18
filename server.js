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
		
		// Set encoding
		request.setEncoding("utf8");
		
		// Add listener for concating POST data
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '" +
			postDataChunk + "'.");
		});
		
		// Add listener for calling router upon POST data concation completition
		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}
	// Initialize the HTTP server for the application project
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
