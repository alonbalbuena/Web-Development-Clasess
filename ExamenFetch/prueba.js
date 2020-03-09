var numAccesos = document.querySelector("input");

//FUNCIONALIDAD AL BOTON
document.querySelector("button").addEventListener("click", () => {
  fetch("http://opendata.gijon.es/descargar.php?id=179&tipo=JSON")
    .finally(() => loading()) //empezamos animacion de carga(por si tarda)
    .then(datos => datos.json())
    .then(json => filterNumAccesos(json, numAccesos))
    .then(datosFiltrados => imprimirCalles(datosFiltrados))
    .then(tiposVia => getPortales(tiposVia))
    .finally(() => stopLoading()); //finalizamos carga
});

/*filtramos las calles, por numero de accesos introducidos por el input*/
function filterNumAccesos(json, numAccesos) {
  return new Promise((resolve, reject) => {
    let resultado = json.calles.calle.filter(
      calle => calle.nÚmeroaccesos > numAccesos.value
    );

    resolve(resultado);
  });
}

function imprimirCalles(calles) {
  /*creamos encabezados y estructura de la seccion*/
  document.body.innerHTML += `<h1>Calles con mas de ${numAccesos.value} accesos</h1>
    <ul class="calles"></ul>`;

  /*rellenamos la seccion*/
  let seccionCalles = document.querySelector(".calles");
  calles.forEach(calle => {
    const { nombre, tipo, nÚmeroaccesos } = calle;
    seccionCalles.innerHTML += `<li>Calle ${nombre} - Tipo <b>${tipo}</b>,nº de accesos: <b>${nÚmeroaccesos}</b></li>`;
  });

  /*devolvemos como datos otra promesa pra poder encadenar mas codigo*/
  return new Promise((resolve, reject) => {
    /*guardamos todos los tipos de via en una lista(no permite repeticion)*/
    var listaTipos = new Set();
    calles.forEach(calle => listaTipos.add(calle.tipo));
    resolve(listaTipos);
  });
}

function getPortales(tiposVia) {
  /*creamos encabezados y estructura de la seccion*/
  document.body.innerHTML += `<h1>Número de portales por tipo de calle</h1>
    <ul class="portales"></ul>`;

  /*rellenamos la seccion*/
  let seccionPortales = document.querySelector(".portales");

  /*mostramos los portales que cumplan que,
  su tipo de via coincida con una de las calles anteriormente mostradas*/
  fetch("http://opendata.gijon.es/descargar.php?id=33&tipo=JSON")
    .then(datos => datos.json())
    .then(json => {
      let contador = 0;
      /*PRIMERO RECORREMOS LOS TIPOS DE VIA*/
      tiposVia.forEach(via => {
        /*POR CADA TIPO DE VIA CONTAMOS CUANTOS PORTALES HAY*/
        json.portales.portal.forEach(portal => {
          if (via == portal.tipo) contador += 1;
        });
        seccionPortales.innerHTML += `<li>${via}=>${contador}</li>`;
      });
    });
}

//ANIMACION DE CARGA POR SI TARDA MUCHO LA PETICION
function loading() {
  document.querySelector(".loading").style.display = "block";
}

function stopLoading() {
  document.querySelector(".loading").style.display = "none";
}
