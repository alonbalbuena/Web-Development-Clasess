const http = require('http');
const url = require('url');
const fs = require('fs');
const puerto = process.env.PORT || 8888

const servidor = http.createServer((peticion, respuesta) => {
    const urlPeticion = url.parse(peticion.url);
    let path = 'static' + urlPeticion.pathname;
    if (path == 'static/')
        path = 'static/index.html';
    fs.stat(path, error => {
        if (!error) {
            fs.readFile(path, (error, contenido) => {
                if (error) {
                    respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
                    respuesta.write('Error interno');
                    respuesta.end();
                } else {
                    respuesta.writeHead(200, { 'Content-Type': 'text/html' });
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });
        } else {
            respuesta.writeHead(404, { 'Content-Type': 'text/html' });
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
            respuesta.end();
        }
    });
});

servidor.listen(puerto);

console.log(`Servidor web iniciado en http://localhost/${puerto}`);