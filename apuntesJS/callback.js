const usuarios = [
  { id: 1, nombre: "hola" },
  { id: 1, nombre: "hola" },
  { id: 1, nombre: "hola" }
];

function getUsuarios(callback) {
  setTimeout(() => {
    callback(null, usuarios);
  }, 200);
}

getUsuarios((err, usuarios) => console.log(usuarios));
