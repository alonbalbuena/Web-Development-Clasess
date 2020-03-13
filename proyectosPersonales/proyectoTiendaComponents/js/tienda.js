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
