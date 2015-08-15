// Include server, router, and request handler functionality
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Create request handler object
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload

// Initialize the HTTP server
server.start(router.route, handle);
