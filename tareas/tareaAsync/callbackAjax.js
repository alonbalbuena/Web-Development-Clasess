function peticionBD(callback) {
  setTimeout(() => {
    console.log("peticion base de datos");
    callback();
  }, 5000);
}

function mostrarNombre() {
  console.log("mostrar nombres");
}

peticionBD(mostrarNombre);
