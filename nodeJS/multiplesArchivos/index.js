const http = require("http");

const servidor = http.createServer(handleServer);

var handleServer = (request, response) => {
  response.writeHead(200, {"Content-type":"text/html"});
  console.log("server corriendo...");
  response.end();
};

servidor.listen(80);
