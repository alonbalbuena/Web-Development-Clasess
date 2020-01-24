
function peticion(ruta, funcion) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange() => {
        var repuesta = JSON.parse(xhr.responseText);
        funcion(respuesta);
};
  xhr.open("GET", `https://pokeapi.co/api/v2/${ruta}`,async);//es asincrono
  xhr.send();
}

peticion("pokemon/ditto", tratarDatosDitto);
peticion("pokemon",tratarDatosPokemon)

