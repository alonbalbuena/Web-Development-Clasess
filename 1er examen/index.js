//importamos los datos para trabajar
import { productos } from "./productos.js";

window.onload = function init() {
  //CREACION DE CONTENIDO

  //creamos una seccion para la compra de productos
  const seccionProductos = document.createElement("div");
  seccionProductos.classList.add("seccion-productos"); //añadimos estilos

  productos.forEach(producto => {
    seccionProductos.innerHTML += `
    <div class="producto">
      <img class="producto__imagen" src="./imagenes/${producto.foto}" alt="foto ${producto.denominacion}">
      <div class="producto__info">
        <p class="producto__info-titulo">${producto.denominacion}</p>
        <p class="producto__info-comentario">${producto.comentario}</p>
        <button class="producto__boton producto__boton--grupoA">grupo a</button>
        <button class="producto__boton producto__boton--grupoB">grupo b</button>
      </div>
    </div>`;
  });

  //introducimos la seccion con TODOS los productos introducidos
  document.body.appendChild(seccionProductos);

  const grupos = this.document.createElement("div");
  grupos.innerHTML = `
    <div class="seccion-grupos__A"></div>
    <div class="seccion-grupos__B"></div>
    `;
  grupos.classList.add("seccion-grupos");
  //añadimos la zona de los grupos al body
  document.body.appendChild(grupos);

  //seleccionamos todos los botones y les damos el evento del click
  document
    .querySelectorAll(".producto__boton")
    .forEach(boton => boton.addEventListener("click", pulsarBoton));

  function pulsarBoton(event) {
    //hacemos referencia al producto seleccionado para guardar info
    const producto = this.parentNode.parentNode;

    /*creamos el producto que guardaremos en la lista
    1- la direccion de la imagen del producto seleccionado
    2- el titular del producto y lo introducimos en la foto
    3- introducimos en un p el titular del producto*/
    const productoNuevo = document.createElement("div");
    //cambiamos el formato del producto
    productoNuevo.classList.add("producto-grupo");
    productoNuevo.innerHTML = `
    <img class="producto-grupo__imagen" src=${producto.childNodes[1].src} alt="imagen ${producto.childNodes[3].childNodes[1].textContent} ">
    <p class="producto-grupo__titulo">${producto.childNodes[3].childNodes[1].textContent}</p>
    `;

    //una vez pulsado se elimina el evento de los dos botones, y por tanto su funcionalidad
    this.parentNode
      .querySelectorAll(".producto__boton")
      .forEach(boton => boton.removeEventListener("click", pulsarBoton));

    document.querySelectorAll("");

    if (this.textContent == "grupo a") {
      //guardamos el producto solo en el grupo seleccionado
      document.querySelector(".seccion-grupos__A").appendChild(productoNuevo);
    } else {
      document.querySelector(".seccion-grupos__B").appendChild(productoNuevo);
    }
  }
};
