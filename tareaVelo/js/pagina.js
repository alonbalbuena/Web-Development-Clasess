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
    const json = JSON.parse(this.responseText);
    /*el metodo devolvera el array de tareas*/
    const tareas = json.tareas.forEach(tarea =>
      crearTarea(tarea.tarea, tarea.hecha)
    );
  };

  xhr.open("GET", "./js/lista.json", true);

  xhr.send();
}

function crearTarea(tarea, hecha) {
  document.querySelector(".lista").innerHTML = `<div class="tarea">
  <h1>${tarea}</h1>
  <h1>${hecha}</h1>
  </div>
  `;
}

getTareas();
