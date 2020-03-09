function pedirDatos(url,callback) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.send();

  xhr.onreadystatechange = function(){
    var datos = JSON.parse(xhr.response);
    callback(datos);
  }

}

function mostrarDatos(datos){
  console.log(datos);
}

function eliminarDatos(datos){
  console.log("eliminar");
  
}


pedirDatos("https://jsonplaceholder.typicode.com/users",mostrarDatos);
