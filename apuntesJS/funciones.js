var array = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
//operador SPREAD
resultado = [...array];
//si queremos realizar una accion por cada uno
var resultado = array.forEach(x => console.log(x * 2));
//si quiero hacer algo con cada uno
var resultado = array.map(x => x * 2);

document.querySelector(".consola").textContent = resultado;
