//hacemos que aparezca el menu cuando le damos al boton BURGER
document.querySelector(".menu__boton").addEventListener("click", function() {
  /*cambiamos de estilo*/
  const menu = document.querySelector(".menu");
  const contenido = document.querySelector(".contenido");

  if (menu.className != "menu menu--activo") {
    menu.classList.add("menu--activo");
    /*desaparecen los botones que se deslizan*/
    contenido.style.display = "none";
    /*usamos animacion*/
    this.classList.add("menu__boton--activar");
  } else {
    /*volvemos a la normalidad*/
    menu.className = "menu";
    /*reaparcene los botones que se deslizan*/
    contenido.style.display = "block";
    /*reiniciamos la animacion*/
    this.className = "menu__boton";
  }
});

//Si pulsamos en el boton de TIENDA nos redirecciona
document.querySelector(".boton--tienda").addEventListener("click", function() {
  window.location.href = "./pagina.html";
});
