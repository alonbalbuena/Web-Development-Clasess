//IMPORTAMOS LA CLASE
import { Icono } from "./Icono.js";

//CREAMOS EL MAPA
var map = L.map("map").setView([43.522727, -5.662458], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREAMOS BOTONES Y SU FUNCIONALIDAD
document.querySelector(".biblios").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/cultura-ocio/bibliotecas.json"
  ).then(puntos => pintarMarker(puntos, new Icono("./icons/book-icon.svg")));
});
document.querySelector(".sanidad").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/salud/centros-sanitarios.json"
  ).then(puntos => pintarMarker(puntos, new Icono("./icons/hospital.svg")));
});

//PROMESA QUE DEVUELVE LOS DATOS YA FILTRADOS
function pedirDatos(url) {
  //enviamos los datos en promesa
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(datos => datos.json())
      .then(json => {
        //ANTES DE ENVIAR FILTRAMOS LOS UNDEFINED
        let puntos = json.directorios.directorio.filter(
          x => x.localizacion.content != undefined
        );
        resolve(puntos);
      });
  });
}

//FUNCION GENERICA PARA PINTAR UN MARCADOR(ponemos un icono por defecto)
function pintarMarker(puntos, icono = new Icono("./icons/default.svg")) {
  puntos.forEach(punto => {
    //separamos las coordenadas que las divide un espacio
    let coordenadas = punto.localizacion.content.split(" ", 2);

    //creamos el marcador con el icono personalizado que tenemos en un modulo a parte
    const marcador = L.marker(coordenadas, { icon: icono });

    //añadimos popup
    marcador.bindPopup(punto.nombre.content);

    //incluimos en el mapa
    marcador.addTo(map);
  });
}
