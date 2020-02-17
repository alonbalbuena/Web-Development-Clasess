const usuarios = [
  { id: 1, nombre: "lucia", profesion: 1 },
  { id: 2, nombre: "paco", profesion: 1 },
  { id: 3, nombre: "alonso", profesion: 2 }
];
const profesiones = {
  1: "programador",
  2: "diseñador"
};

function hacerAlgo(callback) {
  callback("hacer algo");
}

function hacerOtraCosa(mensaje) {
  console.log(mensaje + "hacer otra cosa");
}

hacerAlgo(hacerOtraCosa);
