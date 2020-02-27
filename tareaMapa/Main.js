class Icono extends L.Icon {
  constructor(url) {
    //llamamos a L.ICON
    super({
      iconSize: [25, 25],
      popupAnchor: [0, -13],
      //añadimos la caracteristica extra
      iconUrl: url
    });
  }
}

document.querySelector(".biblios").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/cultura-ocio/bibliotecas.json",
    pintarMarker,
    new Icono("./book-icon.svg")
  );
});
document.querySelector(".sanidad").addEventListener("click", () => {
  pedirDatos(
    "http://datos.gijon.es/doc/salud/centros-sanitarios.json",
    pintarMarker,
    new Icono("./hospital.svg")
  );
});

function pedirDatos(url, callback, icono) {
  var ajax = new XMLHttpRequest();
  var peticion;

  ajax.onload = function() {
    peticion = JSON.parse(this.responseText).directorios.directorio;

    //una vez tengamos los datos ejecutamos la funcion que queramos
    //le pasamos el icono (no lo procesamos aqui)
    callback(peticion, icono);
  };

  ajax.open("GET", url, true);

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
      var arrayCoordenadas = punto.localizacion.content.split(" ", 2);

      //creamos
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
