const mapa = new Map();

fetch("http://datos.gijon.es/doc/salud/centros-sanitarios.json")
  .then(datos => datos.json())
  .then(json => filtrarUndefined(json))
  .then(direcciones =>
    direcciones.forEach(direccion => {
      let coordenadas = direccion.localizacion.content.split(" ", 2);
      //coloco el nombre y el valor de la coordenada
      //un STRING y un ARRAY
      mapa.set(direccion.nombre.content, coordenadas);
    })
  );

//Mostrara solo los directorios que tienen dos valores en localizacion (es decir las coordenadas y la web )
function filtrarUndefined(json) {
  return new Promise((resolve, reject) =>
    resolve(
      json.directorios.directorio.filter(
        x => x.localizacion.content != undefined
      )
    )
  );
}

//IMPORTAMOS LA CLASE
import { Icono } from "./Icono.js";

//CREAMOS EL MAPA
var map = L.map("map").setView([43.522727, -5.662458], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//FUNCION GENERICA PARA MAPA(ponemos un icono por defecto)
function pintarMapa(mapa, icono = new Icono("./icons/default.svg")) {
  mapa.forEach((coordenadas, nombre) => {//importe orden...
    
    //marcador con el icono que tenemos en un modulo a parte
    const marcador = L.marker(coordenadas, { icon: icono });

    //añadimos popup
    marcador.bindPopup(nombre);

    //incluimos en el mapa
    marcador.addTo(map);
  });
}

document.querySelector(".biblios").addEventListener("click", ()=>{pintarMapa(mapa)});
