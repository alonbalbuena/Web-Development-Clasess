import { productos } from "./productos.js/index.js";

window.onload = function init() {
  //CREACION DE CONTENIDO

  //creamos una seccion para la compra de productos
  const seccionProductos = document.createElement("div");
  seccionProductos.classList.add("seccion-productos"); //añadimos estilos

  //creamos cada producto
  productos.forEach(producto => {
    //Creamos un elemento por cada producto que se introducira en seccion-productos
    const bloqueProducto = document.createElement("div");
    bloqueProducto.classList.add("producto"); //añadimos estilos

    //rellenamos el elemento creado con una estructura preestablecida
    bloqueProducto.innerHTML = `
    <img class="producto__imagen" src="./imagenes/${producto.foto}" alt="foto ${producto.denominacion}">
    <div class="producto__info">
        <p class="producto__info-titulo">${producto.denominacion}</p>
        <p class="producto__info-comentario">${producto.comentario}</p>
        <button class="producto__boton producto__boton--grupoA">grupo a</button>
        <button class="producto__boton producto__boton--grupoB">grupo b</button>
    </div>
    `;
    //introducimos el elemento finalizado en seccion-productos
    seccionProductos.appendChild(bloqueProducto);
  });

  //introducimos la seccion con TODOS los productos introducidos
  //(como el escript no ha creado la pagina todavia no le ha dado tiempo ha crear el body, por eso el uso de window.onload)
  document.body.appendChild(seccionProductos);

  //Creamos la zona de los grupos
  const grupos = document.createElement("div");
  grupos.classList.add("seccion-grupos");
  //generamos por los grupos
  const grupoA = document.createElement("div");
  grupoA.classList.add("seccion-grupos__A");
  const grupoB = document.createElement("div");
  grupoB.classList.add("seccion-grupos__B");

  //añadimos por ultimo los grupos a la zona de grupos
  grupos.appendChild(grupoA);
  grupos.appendChild(grupoB);

  //añadimos la zona de los grupos al body
  document.body.appendChild(grupos);

  /*#############################################################
#############################################################*/

  //seleccionamos todos los botones y les damos el evento del click
  const botones = document
    .querySelectorAll(".producto__boton")
    .forEach(boton => boton.addEventListener("click", pulsarBoton));

  function pulsarBoton(event) {
    //hacemos referencia al boton pulsado
    //y cojemos el texto interior que es que
    //usaremos para insertar en el grupo el producto
    const grupo = this.textContent;

    //hacemos referencia al producto seleccionado para guardar info
    const producto = this.parentNode.parentNode;

    //creamos el producto que guardaremos en la lista
    const productoNuevo = document.createElement("div");
    productoNuevo.classList.add("producto-grupo"); //cambiamos el formato del producto

    /*cojemos:
      1- la direccion de la imagen del producto seleccionado
      2- el titular del producto y lo introducimos en la foto
      3- introducimos en un p el titular del producto*/
    productoNuevo.innerHTML = `
      <img class="producto-grupo__imagen" src=${producto.childNodes[1].src} alt="imagen ${producto.childNodes[3].childNodes[1].textContent} ">
      <p class="producto-grupo__titulo">${producto.childNodes[3].childNodes[1].textContent}</p>
      `;

    //necesitamos un array con los productos ya introducidos en el grupo
    var productosGrupo = Array.from(
      document.getElementsByClassName("producto-grupo")
    );

    //antes de introducir el producto comprobamos si ya esta guardado
    //solo dejara guardarlo cuando el producto no exista !some
    //cuando encuentre un elemento igual que el que tratamos meter devolvera TRUE
    if (
      !productosGrupo.some(
        productoExistente =>
          productoExistente.innerHTML == productoNuevo.innerHTML
      )
    ) {
      if (grupo == "grupo a") {
        //guardamos el producto solo en el grupo seleccionado
        grupoA.appendChild(productoNuevo);
      } else {
        grupoB.appendChild(productoNuevo);
      }
    } else {
      console.log("elemento repetido");
    }
  }
};
