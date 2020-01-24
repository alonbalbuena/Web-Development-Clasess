async function operacion(n1, n2, function(){
    setTimeout(() => {
        resolve("operacion");
    }, 2000);
}) {
  return callback(n1, n2);
}

function resta(numero1, numero2) {
  console.log("resta");
  return numero1 - numero2;
}

console.log(operacion(2, 3, resta));
