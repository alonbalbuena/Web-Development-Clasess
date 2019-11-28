const carrito = document.querySelector(".seccion-carrito");

const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
  const productoCarrito = document.createElement("p");
  productoCarrito.className = "producto-carrito";

  productoCarrito.textContent =
    producto.children[3].firstElementChild.textContent +
    producto.children[3].lastElementChild.textContent;

  carrito.appendChild(productoCarrito);
});

//APARICION DEL CARRITO
document
  .querySelector(".navegacion__carrito")
  .addEventListener("click", function() {
    document.querySelector(".seccion-carrito").style.maxHeight = "200px";
  });
