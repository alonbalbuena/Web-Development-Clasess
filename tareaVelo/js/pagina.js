/*Generamos contenido*/
document.body.innerHTML = `
<h1 class="titulo">Tareas por hacer</h1>
<div class="lista">
</div>
`;

function getTareas() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    /*pasamos el texto recibido a tipo JSON*/
    json = JSON.parse(this.responseText);
    /*el metodo devolvera el array de tareas*/
    console.log(json.tareas);
  };

  xhr.open("GET", "./js/lista.json", true);

  xhr.send();
}

const tareas = getTareas();
