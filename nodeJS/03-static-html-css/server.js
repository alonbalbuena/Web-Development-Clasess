const http = require('http');
const url = require('url');
const fs = require('fs');

const mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};

const servidor = http.createServer((peticion, respuesta) => {
    const objetourl = url.parse(peticion.url);
    let path = 'static' + objetourl.pathname;
    if (path == 'static/')
        path = 'static/food.html';
    fs.stat(path, error => {
        if (!error) {
            fs.readFile(path, (error, contenido) => {
                if (error) {
                    respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
                    respuesta.write('Error interno');
                    respuesta.end();
                } else {
                    const arrayPath = path.split('.');
                    const extension = arrayPath[arrayPath.length - 1];
                    const mimearchivo = mime[extension];
                    respuesta.writeHead(200, { 'Content-Type': mimearchivo });
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

servidor.listen(8888);

console.log('Servidor web iniciado en puerto 8888');