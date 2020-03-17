import * as http from "http";
import * as url from "url";
import * as fs from "fs";

http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    switch (url.parse(request.url).pathname) {
      case "/home":
        fs.readFile("./index.html",(err,data)=>{
            response.end(data);
        })
        break;
      case "/formulario":
        response.end("Formulario");
      default:
          fs.readFile("./index.html",(err,data)=>{
            response.end(data);
        })
        break;
    }
  })
  .listen(80);
