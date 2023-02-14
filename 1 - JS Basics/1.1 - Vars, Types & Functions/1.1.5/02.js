// Modifica la variable counter al invocar la función para que el numero mostrado sea un 1

// Primero, hay que establecer el valor de 'counter' en '1'.

let counter = 0; // La variable 'counter' inicializa en '0'.

const sumCounter = () => { // Luego declara la function 'sumCounter' que establece el valor de 'counter' en '1'.
  // 👇🏻 Modifica aquí la variable counter
    counter= 1;
};
  // 👆🏻

// 👇🏻 Invoca la función para modificarlo
sumCounter();
// 👆🏻

console.log(counter);
