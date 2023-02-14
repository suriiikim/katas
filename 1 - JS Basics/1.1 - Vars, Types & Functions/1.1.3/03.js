// Crea una función que devuelva el número negativo del parámetro

inverse(4) // Debe mostrar -4
inverse(2) // Debe mostrar -2

function inverse(number) { // el parametro de esta function is 'number'. 
  return -Math.abs(number); // la expresión '-Math.abs()' dará resultado de numero con un '-'. 
}

console.log(inverse(4));
console.log(inverse(2));
