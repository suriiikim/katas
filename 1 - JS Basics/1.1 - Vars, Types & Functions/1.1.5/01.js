// Revisa este código y añade al final el nombre que crees que contendrá
// la variable "finalName" y la variable "name"
const name = 'Pepe'; // Se define la variable 'name' como Pepe

const primera = () => { // Se define la function llamada 'primera' que establece la variable 'name' como 'Jon'.
  const name = 'Jon'; 
  return name; // Devuelve el valor 'name'
};

const finalName = primera(); // La function se llama y su valor de return se guarda en la variable 'finalName'.

// 👇🏻 Añade entre las comillas el nombre que contiene finalName y name;
console.log(finalName, 'Jon');
console.log(name, 'Pepe');
// 👆🏻
