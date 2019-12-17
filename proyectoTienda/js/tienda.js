const carrito = document.querySelector(".seccion-carrito");

const productos = document.querySelectorAll(".producto");

//APARICION DEL CARRITO
document
  .querySelector(".navegacion__carrito")
  .addEventListener("click", function() {
    const carrito = document.querySelector(".seccion-carrito");

    if (carrito.style.maxHeight == "0px") {
      //aparicion
      carrito.style.maxHeight = "500px";
    } else {
      //desaparacion
      carrito.style.maxHeight = "0px";
    }
  });

//AGREGAR UN PRODUCTO
document
  .querySelectorAll(".boton")
  .forEach(boton => boton.addEventListener("click", añadirProducto));

/*creamos un contador*/
var contador = 0;
var contadorDOM = document.querySelector(".contador-productos");

function añadirProducto() {
  const nuevoProducto = document.createElement("div");
  nuevoProducto.className = "producto-carrito";
  nuevoProducto.innerHTML = `<img class="producto-carrito__imagen" src = ${this.parentNode.firstElementChild.src} alt = descripcion >
  <p class="producto-carrito__descripcion">${this.parentNode.lastElementChild.firstElementChild.textContent}</p >`;

  /*creo el boton de eliminar*/
  const eliminar = document.createElement("button");
  eliminar.textContent = "eliminar";
  eliminar.addEventListener("click", eliminarProducto);
  nuevoProducto.appendChild(eliminar);

  /*añadimos todo*/
  document.querySelector(".seccion-carrito").appendChild(nuevoProducto);

  /*sumamos el contador y actualizamos el DOM*/
  contador += 1;
  contadorDOM.textContent = contador;
}

//ELIMINAR UN PRODUCTO
function eliminarProducto() {
  this.parentNode.remove();

  /*restamos el contador y actualizamos el DOM*/
  contador -= 1;
  contadorDOM.textContent = contador;
}
