// Request handler functions
function start() {
	console.log("Request handler 'start' was called.");
}

function upload () {
	console.log("Request handler 'upload' was called.");
}

// Export request handlers
exports.start = start;
exports.upload = upload;
