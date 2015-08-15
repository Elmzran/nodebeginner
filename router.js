// Routing function
function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	
	// Handle any requests
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	}
	else {
		console.log("No request handler found for " + pathname);
		return "404 Not found";
	}
}

exports.route = route;
