/*Generamos contenido*/
document.body.innerHTML = `
  <h1 class="titulo">Tareas por hacer</h1>
  <div class="lista">
  </div>
  `;
getTareas();

/*DECLARAMOS LAS FUNCIONES*/
function getTareas() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    /*pasamos el texto recibido a tipo JSON*/
    const json = JSON.parse(this.responseText);
    /*el metodo devolvera el array de tareas*/
    json.forEach(tarea => crearTarea(tarea.tarea, tarea.hecha));
  };

  xhr.open("GET", "./js/lista.json", true);

  xhr.send();
}

function crearTarea(tarea, hecha) {
  //si tarea esta hecha devuelve checked
  if (hecha == "hecha") {
    hecha = "checked";
  }

  //checked es introducido en el input
  //hacemos desaparecer input con css y usaremos solo label
  document.querySelector(".lista").innerHTML += `<div class="tarea">
  <p>${tarea}</p>
  <input type="checkbox" id="${tarea}" ${hecha} ></input>
  <label for="${tarea}" class="tarea__check">label</label>
  </div>
  `;
  //usamos un id distinto para cada input/label
}
