var http= require ('http');
http.createServer=(function(request,response){
	response.writeHead(200);
	response.write("you're awesome");
	response.end();
}).listen(8080);
console.log('running bitches');