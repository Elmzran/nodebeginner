// Include Querystring for proper POST data formatting
var querystring = require("querystring"),
	fs = require("fs");

// Request handler functions
function start(response, postData) {
	console.log("Request handler 'start' was called.");
	
	// Create HTML for startpage response
	var body = "<html>" +
	"<head>" +
		"<meta http-equiv=\"Content-Type\" content=\"text/html; " +
		"charset=UTF-8\" />" +
	"</head>" +
	"<body>" +
		"<form action=\"/upload\" method=\"post\">" +
			"<textarea name=\"text\" rows=\"20\" cols=\"60\"></textarea>" +
			"<input type=\"submit\" value=\"Submit text\" />" +
		"</form>" +
	"</body>" +
	"</html>";
	
	// Write HTML to page
	response.writeHead(200, {"Content-type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: " + querystring.parse(postData).text);
	response.end();
}

function show(response) {
	console.log("Request handlers 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("./tmp/test.png").pipe(response);
}

// Export request handlers
exports.start = start;
exports.upload = upload;
exports.show = show;
