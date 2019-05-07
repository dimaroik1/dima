const http = require("http");
http.createServer(function(request, response){
	response.end(request.url);
}).listen(8000,'127.0.0.1', () => {})