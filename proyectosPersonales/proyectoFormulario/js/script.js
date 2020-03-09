var listaAlumnos = [
  {
    nombre: "alonso"
  },
  {
    nombre: "oscar"
  },
  {
    nombre: "pablo"
  },
  {
    nombre: "ian"
  }
];

/*COMPROBACION DEL NOMBRE*/
const nombre = document.querySelector("#textId");
const errorNombre = document.querySelector(".field__error--nombre");

nombre.addEventListener("focus", function () {
  errorNombre.textContent = "introduzca email";
});
nombre.addEventListener("blur", comprobarNombre);
nombre.addEventListener("keypress", comprobarNombre);

function comprobarNombre(evento) {
  //comprobamos cada vez que introducimos una letra,
  //en un gran proyecto seria una carga muy grande para el
  //ordenador, pero ya que es
  //un mini proyecto no le damos mucha importancia
  if (listaAlumnos.some(alumno => alumno.nombre == textId.value + evento.key)) {
    //buscamos un nombre con las letras metidas en la casilla ademas de la tecla pulsada
    errorNombre.textContent = "bien";
  } else {
    errorNombre.textContent = "alumno no existente";
  }
}

/*COMPROBACION DEL SEXO*/
const radio = document.querySelectorAll(".field--sexo > .field__input");
//seleccionamos los inputs para el sexo
const errorSexo = document.querySelector(".field__error--sexo");

//comprobamos si estan marcados al no enfocar en los botones
for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("blur", comprobarSexo)
}

function comprobarSexo(evento) {
  //si algun boton no esta marcado saldra un error
  //no permite el uso de some el nodelist
  if (radio[0].checked || radio[1].checked) {
    //tiene que haber alguna casilla seleccionada
    errorSexo.textContent = "sexo valido";
  }
  else {
    errorSexo.textContent = "seleccione un sexo";
  }
}

/*COMPROBACION DE CONDICIONES DE USO*/
const submit = document.querySelector(".botones--enviar");
const errorCondiciones = document.querySelector(".field__error--condiciones")

submit.addEventListener("click", function () {
  if (!document.querySelector(".field--condiciones > .field__input").checked) {
    errorCondiciones.textContent = "no marcada";
  }
})

/*si se rellenan todos los campos enviamos si no te los pide */
if (false) {

  document.querySelector(".form").submit();
}