// Crea una función que reemplace todas las 'a' de un texto por 'i'


//replace() es un metodo de JS para reemplazar las letras.

// 👇🏻 Define aquí tu función
const replaceA = (text) => { //Ponemos 'text' en el parametro que corresponde al texto que se desea modificar. 
  return text.replace (/a/g, 'i') // Luego, utilizando replace() y una expresión regular /a/g, podemos reemplazar todas las instancias de la letra 'a' por 'i'. 
                                 // El modificador g indica que se deben reemplazar todas las coincidencias, no solo la primera.
};
// 👆🏻

replaceA('hola que tal'); // holi que til
console.log(replaceA('hola que tal'));
replaceA('me llamo Carlos'); // me llimo Cirlos
console.log(replaceA('me llamo Carlos'));
