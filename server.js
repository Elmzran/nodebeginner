// Import required modules
var http = require("http");
var url = require("url");

// Package server code into a single function for exporting
function start(route, handle) {
	// Function for handling server connections
	function onRequest(request, response) {
		// Parse the url for the pathname
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		// Execute routing		
		//route(handle, pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(route(handle, pathname));
		response.end();	
	}
	// Initialize the HTTP server for the application project
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
