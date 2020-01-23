//tardara 2 SEGUNDOS
let encenderCuadro = () => {
  /*hacemos que el tiempo de encendido del cuadro sea mayor que el de las bombillas para comprobar el funcionamiento del callback*/
  setTimeout(() => console.log("el cuadro de la luz esta encendido"), 2000);
};

//tardara 1 SEGUNDO
let encenderBombillas = callback => {
  callback();
  setTimeout(() => {
    console.log("por tanto se pueden encender las bombillas ");
  }, 1000);
};
encenderBombillas(encenderCuadro);
