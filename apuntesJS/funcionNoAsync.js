function funcion() {
  //ejecutamos funcion con 2 segundos de retardo
  const mensajeAsync = datosCon2Segundos();
  //usamos los datos que devuelve
  //pero al llamar al log mientras se carga
  //los datos en 2 segundos pues sale como undefined
  console.log(mensajeAsync);
}

function datosCon2Segundos() {
  setTimeout(() => {
    return "promesa con retardo";
  }, 2000);
}

funcion();
