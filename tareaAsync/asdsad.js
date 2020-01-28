//una funcion no se ejecuta hasta que tiene todos los parametros, por tanto "operacion" espera hasta que la funcion anonima acabe de ejecutarse
function operacion(n1, n2, operacion, callback) {
  console.log("2llamamos a la funcion");

  callback();

  return operacion(n1, n2);
}
function resta(numero1, numero2) {
  console.log("3resta");

  return numero1 - numero2;
}

//ejecutamos callback
operacion(2, 3, resta, function() {
  console.log("1ejecutamos callback");
});
