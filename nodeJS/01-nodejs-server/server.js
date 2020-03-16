import * as http from "http";
import * as url from "url";
import * as fs from "fs";

console.log(`Puerto => 80`);

http
  .createServer((request, response) => {
    fs.readFile("archivo.html", (error, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data + "" + url.parse(request.url, true).year); //imprimimos el contenido de la pagina cogida por readFile
      response.end(); /*envia el contenido con dicha cabezera asi la aplicacion confirma que ya ha sido cargado el server y no ncesita reintentarlo*/
    });
  })
  .listen(80);
