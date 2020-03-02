const mapa = new Map();

fetch("http://datos.gijon.es/doc/salud/centros-sanitarios.json")
  .then(datos => datos.json())
  .then(json => filtrarUndefined(json))
  .then(direcciones =>
    direcciones.forEach(x => {
      let coordenadas = x.localizacion.content.split(" ", 2);
      //coloco el nombre y el valor de la coordenada
      //un STRING y un ARRAY
      mapa.set(x.nombre.content, coordenadas);
    })
  );

//Mostrara solo los directorios que tienen dos valores en localizacion (es decir las coordenadas y la web )
function filtrarUndefined(json) {
  return new Promise((resolve, reject) =>
    resolve(json.directorios.directorio.filter(x => x.localizacion.content != undefined))
  );
}

console.log(mapa);
