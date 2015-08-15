// Import HTTP module
var http = require("http");

// Package server code into a single function for exporting
function start() {
	// Function for handling server connections
	function onRequest(request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();	
	}
	// Initialize the HTTP server for the application project
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
