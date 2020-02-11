async function funcion() {
  //esperamos a la señal con retraso para tener sus datos
  //si la funcion de datosCon2Segundos no tuviese dentro una Promise (no haria falta await)
  const mensajeAsync = await datosCon2Segundos();
  //usamos los datos que devuelve
  console.log(mensajeAsync);
}

function datosCon2Segundos() {
  //devuelve datos (en forma de promesa) con retraso
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("promesa con retardo");
    }, 2000);
  });
}

//funcion al ser ASYNC siempre devuelve una promesa (usamos promesas .then)
funcion().then(alerta);

function alerta() {
  console.log("COMPLETADOO");
}
