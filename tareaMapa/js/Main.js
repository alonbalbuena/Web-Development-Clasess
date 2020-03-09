//IMPORTAMOS LA CLASE
import { Icono } from "./Icono.js";

//CREAMOS EL MAPA
var map = L.map("map").setView([43.522727, -5.662458], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREAMOS BOTONES Y SU FUNCIONALIDAD
document.querySelector(".biblios").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/cultura-ocio/bibliotecas.json",
    pintarMarker,
    new Icono("./icons/book-icon.svg")
  );
});
document.querySelector(".sanidad").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/salud/centros-sanitarios.json",
    pintarMarker,
    new Icono("./icons/hospital.svg")
  );
});

//PONEMOS UN ICONO POR DEFECTO
function pedirDatos(url, callback, icono = new Icono("./icons/default.svg")) {
  let ajax = new XMLHttpRequest();
  let peticion;

  ajax.onload = function() {
    peticion = JSON.parse(this.responseText).directorios.directorio;
    //una vez tengamos los datos ejecutamos la funcion que queramos
    //le pasamos el icono (no lo procesamos aqui)
    callback(peticion, icono);
  };

  ajax.open("GET", url);

  ajax.send();
}

var map = L.map("map").setView([43.522727, -5.662458], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//FUNCIONES
function pintarMarker(peticion, icono) {
  peticion.forEach(punto => {
    //algunas no tienen coordenadas
    if (punto.localizacion.content === undefined) {
      console.log("no tiene coordenadas");
    } else {
      //separamos las coordenadas que las divide un espacio
      let arrayCoordenadas = punto.localizacion.content.split(" ", 2);

      //creamos el marcador con el icono personalizado que tenemos en un modulo a parte
      const marcador = L.marker([arrayCoordenadas[0], arrayCoordenadas[1]], {
        icon: icono
      });

      //añadimos popup
      marcador.bindPopup(punto.nombre.content);

      //incluimos en el mapa
      marcador.addTo(map);
    }
  });
}
