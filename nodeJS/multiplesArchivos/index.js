const http = require("http");
const url = require("url");

http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  console.log("server corriendo...");
  response.end();
}).listen(80);
