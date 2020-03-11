const carrito = document.querySelector(".seccion-carrito");

const productos = document.querySelectorAll(".producto");

//APARICION DEL CARRITO
document
  .querySelector(".navegacion__carrito")
  .addEventListener("click", function() {
    const carrito = document.querySelector(".seccion-carrito");

    if (carrito.style.maxHeight == "0px") {
      //aparicion
      carrito.style.maxHeight = "200px";
    } else {
      //desaparacion
      carrito.style.maxHeight = "0px";
    }
  });

//AGREGAR UN PRODUCTO
document
  .querySelectorAll(".boton")
  .forEach(boton => boton.addEventListener("click", añadirProducto));

function añadirProducto() {
  const nuevoProducto = document.createElement("div");
  nuevoProducto.innerHTML = `<img class="producto-carrito__imagen" src = ${this.parentNode.firstElementChild.src} alt = descripcion >
  <p class="producto-carrito__descripcion">${this.parentNode.lastElementChild.firstElementChild.textContent}</p >`;
  nuevoProducto.className = "producto-carrito";

  document.querySelector(".seccion-carrito").appendChild(nuevoProducto);
}

//DEFINO LOS COMPONENTES
import { Producto } from "./Producto.js";
