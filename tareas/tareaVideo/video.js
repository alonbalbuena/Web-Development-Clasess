/*boton de play y pause*/
document.querySelector(".video__boton").addEventListener("click", function() {
  const video = this.nextElementSibling;
  /*al dar click en el boton si el video ya se esta reproduciendo lo pausamos*/
  if (this.nextElementSibling.paused) {
    this.style.backgroundColor = "red";
    video.play();
    /*movemos el boton de video y quitamos el filtro para poder ver*/
    this.classList.add("video__boton--mover");
    video.style.filter = "none";
  } else {
    /*reiniciamos estilos*/
    this.style.backgroundColor = "darkslategrey";
    video.pause();
    this.className = "video__boton";
    video.style.filter = "blur(5px)";
  }
});

//barra de progreso para el video
document.querySelector("video").addEventListener("timeupdate", function() {
  const barra = document.querySelector(".video__progreso");

  /*el tamaño de la barra empieza en 100%*/
  /*vamos reduciendo el tiempo actual y la convertimos en porcentaje*/
  let calculo = ((this.duration - this.currentTime) * 100) / this.duration;

  barra.style.maxWidth = calculo + "%";
});

//que ocurre al pulsar un video de la galeria
document.querySelectorAll(".video-galeria").forEach(video =>
  video.addEventListener("click", function() {
    const videoNuevo = document.createElement("source");
    videoNuevo.src = this.childNodes[1].childNodes[1].src;
    videoNuevo.type = this.childNodes[1].childNodes[1].type;

    const videoAnterior = document.querySelector(".video__contenido")
      .firstElementChild;

    //cambiamos el video actual por el clicado
    document
      .querySelector(".video__contenido")
      .replaceChild(videoNuevo, videoAnterior);

    //necesitamos recargar el video al cambiar la direccion del source
    document.querySelector(".video__contenido").load();
  })
);

/*despliegue de la galeria*/
document.querySelector(".video__galeria").addEventListener("click", function() {
  let bottom = document.querySelector(".galeria");

  if (bottom.style.bottom == "0px") {
    /*volvemos a la posicion inicial*/
    bottom.style.bottom = "-100vh";
    this.style.transform = "rotate(0deg)";
  } else {
    bottom.style.bottom = "0px";
    /*giramos el boton*/
    this.style.transform = "rotate(180deg)";
  }
});
