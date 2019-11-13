const carrito = document.querySelector(".seccion-carrito");

const productos = document.querySelector(".seccion__productos").childNodes;

productos.forEach(producto => {
    const productoCarrito = document.createElement("p");
    productoCarrito.className = "producto-carrito";

    //si es un objeton vacio no hace na
    if (producto.firstChild == null) {

    } else {
        /*Copiamos el nombre del producto */
        /*producto->(7)producto_info->(1)h1 */
        //productoCarrito.textContent = producto.lastChild.firstChild.textContent;

        productoCarrito.textContent = producto.childNodes[7].childNodes[1].textContent + producto.childNodes[7].childNodes[3].textContent;
    }

    carrito.appendChild(productoCarrito);
});



