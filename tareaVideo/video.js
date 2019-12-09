/*boton de play y pause*/
document.querySelector(".video__boton").addEventListener("click", function() {
  if (this.nextElementSibling.paused) {
    this.style.backgroundColor = "blue";
    this.nextElementSibling.play();
  } else {
    this.style.backgroundColor = "black";
    this.nextElementSibling.pause();
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
