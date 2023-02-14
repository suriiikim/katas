// Que crees que mostrará counter?
// Podrías cambiar el código de alguna manera para que muestre 5?

const createCounter = () => {
  const counter = 5; //variable 'const counter' solo existe dentro de la function 'createCounter'. Por lo tanto, va a dar un error.
  return counter; // 'counter' no está definido en ámbito global.
}

const counter= createCounter(); // Para que muestre 5, hay que crear una línea para almacenar el valor de return por la function 'createCounter' en una variable.

console.log(counter); // Aquí la function 'createCounter' return el varlor '5', que se almacena en la variable 'counter', llamando la function.
