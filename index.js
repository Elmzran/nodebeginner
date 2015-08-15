// Include server and router functionality
var server = require("./server");
var router = require("./router");

// Initialize the HTTP server
server.start(router.route);
