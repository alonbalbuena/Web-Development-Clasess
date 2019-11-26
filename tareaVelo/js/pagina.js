/*Boton con peticion AJAX que genera todo el contenido en el JSON*/
const botonAjax = document.createElement("button");
botonAjax.textContent = "petición ajax";
botonAjax.className = "boton-ajax";
botonAjax.addEventListener("click", getContenido);
document.body.appendChild(botonAjax);

//FUNCIONES QUE NOS GENERARAN EL CONTENIDO DINAMICO

function getContenido() {
  /*Al generar el contenido borra el boton */
  botonAjax.remove();

  /*Generamos contenido*/
  document.body.innerHTML += `
    <h1 class="titulo">Tareas por hacer</h1>
    <div class="lista">
    </div>
    <div class ="nueva-tarea">
      <input class="nueva-tarea__texto" type="text" placeholder="nueva tarea..." ></input>
      <button class="boton">nueva tarea</button>
    </div>
    `;

  //QUE OCURRE SI PULSAMOS EL BOTON NUEVA TAREA
  document.querySelector(".boton").addEventListener("click", function() {
    /*cojemos el text del input y creamos una tarea con el*/
    crearTarea(this.previousElementSibling.value, "no");
  });

  //llamamos a la peticion ajax
  getTareas();
}

function getTareas() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    /*pasamos el texto recibido a tipo JSON*/
    const json = JSON.parse(this.responseText);
    /*el metodo devolvera el array de tareas*/
    json.forEach(tarea => crearTarea(tarea.tarea, tarea.hecha));
    /*usamos la funcion crearTarea para limpieza de codigo.
    Le pasamos el nombre de la tarea y si esta hecha*/
  };

  xhr.open("GET", "./js/lista.json", true);

  xhr.send();
}

function crearTarea(tarea, hecha) {
  //si tarea esta hecha devuelve checked
  if (hecha == "hecha") {
    hecha = "checked";
  }

  //creamos el boton de eliminar
  const eliminar = document.createElement("img");
  eliminar.src = "./img/delete-button.svg";
  eliminar.className = "tarea__eliminar";
  //para ponerle el  evento necesitamos crear previamente el elemento para introducirlo posteriormente en la tarea
  eliminar.addEventListener("click", borrarTarea);

  //creamos la tarea y le introducimos el boton, ademas de:
  //1- checked es introducido en el input
  //2- desaparecemos input y usamos solo label
  //3- usamos un id distinto para cada input/label
  const nuevaTarea = document.createElement("div");
  nuevaTarea.className = "tarea";
  nuevaTarea.innerHTML = `
  <p class="tarea__nombre">${tarea}</p>
  <input type="checkbox" id="${tarea}" ${hecha} ></input>
  <label for="${tarea}" class="tarea__check"></label>`;
  nuevaTarea.appendChild(eliminar);

  //añadimos esta tarea a la lista
  document.querySelector(".lista").appendChild(nuevaTarea);
}

function borrarTarea() {
  /*borra la tarea si seleccionamos el boton*/
  this.parentNode.remove();
}
