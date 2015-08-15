// Import HTTP module
var http = require("http");

// Initialize the HTTP server for the application project
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();	
	}).listen(8888);
