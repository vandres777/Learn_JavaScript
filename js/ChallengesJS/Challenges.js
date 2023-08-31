const btnChallengeOne = document.getElementById("btnChallenge1");
const btnChallengeTwo = document.getElementById("btnChallenge2");
const btnChallengeThree = document.getElementById("btnChallenge3");
const btnChallengeFour = document.getElementById("btnChallenge4");
const btnChallengeFive = document.getElementById("btnChallenge5");
const btnChallengeSix = document.getElementById("btnChallenge6");
const btnChallengeSeven = document.getElementById("btnChallenge7");
const btnChallengeEight = document.getElementById("btnChallenge8");

function retoUno() {
  //Challenge 1: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando for normal. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']

  const frutas = ["manzana", "banana", "cereza", "dátil"];
  for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
}

function retoDos() {
  //Challenge 2: Crea un programa que imprima (log o alert) todos los elementos de un array dado usando forEach. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']

  const animales = ["manzana", "banana", "cereza", "dátil"];
  // Cuando necesitemos recorrer todo el array
  animales.forEach((e) => {
    console.log(e);
  });
}

function retoTres() {
  //Challenge 3: Crea un menu que se repite si ingresa la opcion equivocada hasta que ingrese la opcion correcta - reutilizar ejercicio de operaciones matematicas (exercisesLevel3.js, function exerciseTwo())

  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  while (isNaN(operation) || operation > 4 || operation < 1) {
    alert("Opcion invalida, ingresar numeros entre 1 y 4");
    operation = parseInt(
      prompt(
        "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
      )
    );
  }
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favir ingresar solo numeros");
  }
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 + num2;
      alert("El resultado de la resta es: " + result);
      break;
    case 3:
      result = num1 + num2;
      alert("El resultado de la multiplicacion es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

function retoCuatro() {
  //Challenge 4: Crea un programa que encuentre el número más grande en un array dado usando for normal y lo imprima en un alert o log. Array de ejemplo: [45, 23, 67, 89, 12, 56]

  const numeros = [45, 23, 67, 89, 12, 56];
  let maximo = numeros[0]; // Cambiamos const por let

  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  console.log("El número más grande es: " + maximo);
}

function retoCinco() {
  //Challenge 5: Crea un programa que sume todos los elementos de un array de números usando forEach y lo imprima en un alert o log. Array de ejemplo: [2, 4, 6, 8, 10]
  const numeros = [2, 4, 6, 8, 10];
  let suma = 0;

  numeros.forEach((numero) => {
    suma += numero;
  });
  console.log("La suma de los números es: " + suma);
}

function retoSeis() {
  //Challenge 6: Crea un programa que multiplique cada elemento de un array por 2 y devuelva un nuevo array con los resultados usando for normal. Array de ejemplo: [3, 7, 2, 8]
  const numeros = [3, 7, 2, 8];
  const resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
  }

  console.log("Array original:", numeros);
  console.log("Array resultante:", resultado);
}

function retoSiete() {
  //Challenge 7: Crea un programa que encuentre la suma de los elementos pares en un array usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12]
  const numeros = [1, 4, 7, 3, 10, 12];
  let sumaPares = 0;

  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      sumaPares += numero;
    }
  });

  console.log("La suma de los elementos pares es:", sumaPares);
}

function retoOcho() {
  //Challenge 8: Crea un programa que encuentre el primer número mayor que 50 en un array de números usando un bucle while. Array de ejemplo: [30, 45, 60, 72, 48, 10]
  const numeros = [30, 45, 60, 72, 48, 10];
  let i = 0;
  let numeroMayor = null;

  while (i < numeros.length) {
    if (numeros[i] > 50) {
      numeroMayor = numeros[i];
      break;
    }
    i++;
  }

  if (numeroMayor !== null) {
    console.log("El número mayor que 50 en el listado es:", numeroMayor);
  }
}

////-*-*-*-*-*-*-*-*-

btnChallengeOne.onclick = function () {
  retoUno();
};
btnChallengeTwo.onclick = function () {
  retoDos();
};
btnChallengeThree.onclick = function () {
  retoTres();
};
btnChallengeFour.onclick = function () {
  retoCuatro();
};
btnChallengeFive.onclick = function () {
  retoCinco();
};
btnChallengeSix.onclick = function () {
  retoSeis();
};
btnChallengeSeven.onclick = function () {
  retoSiete();
};
btnChallengeEight.onclick = function () {
  retoOcho();
};
