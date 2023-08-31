const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");
const btnExerciseNine = document.getElementById("btnExercise9");
const btnExerciseTen = document.getElementById("btnExercise10");
/*
Ejercicio 1 :
Ciclo For
*/
function ejercicioUno() {
  const asteriscos = parseInt(prompt("Ingresa el numero de asteriscos"));
  let resultado = "";
  if (asteriscos > 100) {
    return alert("Ingresa un valor menor a 100");
  }
  //index siempre inicia en cero - i =i+1
  for (let i = 0; i < asteriscos; i++) {
    resultado += "*";
  }
  console.log(resultado);
}
/**
 * ejercicio 2
 * FOR - Piramide
 */
function ejercicioDos() {
  // Pedir los niveles
  const niveles = parseInt(prompt("Ingrese los niveles de la piramide"));
  // validar limite de niveles
  if (niveles > 20) {
    return alert("Debe ser un rango de 20 o menor");
  }
  // Validamos si es diferente a un numero
  if (isNaN(niveles)) {
    alert("Favor ingrese un numero del 1 al 20");
  } else {
    let espacio = ""; // asigna espacio en la piramide
    // Colocar niveles
    for (let i = 0; i < niveles; i++) {
      espacio = "";

      // Poner espacios en blanco
      for (let j = 0; j < niveles - i; j++) {
        // porque aqui hay un -i
        espacio += " ";
      }

      // Poner asteriscos
      for (let k = 0; k < 2 * i - 1; k++) {
        // porque esta esa formula loca matematica y el -1
        espacio += "*";
      }

      console.log(espacio);
    }
  }
}
function ejercicioTres() {
  const tabla = parseInt(prompt("Ingrese el numero de la tabla que desea ver"));

  for (let i = 1; i <= 10; i++) {
    console.log(tabla + "X" + i + "=" + tabla * i);
  }
}

function ejercicioCuatro() {
  const animales = ["perro", "gato", "lobo", "serpiente", "conejo"];
  //MOstrar el contenido del array
  /*alert("Lista de animales: " + animales);
  alert("Cantidad de animales: " + animales.length);
  console.log(animales);
  console.log(animales[2]);
  //Recorrer array
*/
  for (let i = 0; i < animales.length; i++) {
    let animal = animales[i];
    if (animal === "loro") {
      return alert("Sí está el animal");
    } else {
      if (i === animales.length - 1) {
        return alert("El animal no esta en la lista");
      }
    }
  }
}

function ejercicioCinco() {
  const animales = ["perro", "gato", "lobo", "serpiente", "conejo"];
  // Cuando necesitemos recorrer todo el array
  animales.forEach((e) => {
    console.log(e);
  });
}

function ejercicioSeis() {
  const personas = ["Pepita", "Pepito", "Juanita", "Juanito", "Pepe", "Pepa"];
  console.log("paso 1", personas);
  // Agregar persona nueva en el array (En la ultima posicion)
  personas.push("Paco");
  console.log("paso 2", personas);
  personas.push("sara");
  console.log("paso 3", personas);
  //Eliminar el ultimo elemento de un array
  personas.pop();
  console.log("paso 4", personas);
  //Agregar elemento al inicio dl array
  personas.unshift("Karen");
  console.log("paso 5", personas);
  // Eliminar el primer elemento del array
  personas.shift();
  console.log("paso 6", personas);
  //Eliminar un elemento cualquiera del array
  personas.splice(3, 2);
  console.log("paso 7", personas);
  //
  delete personas[2];
  console.log("paso 7", personas);
  // delete personas[2]; (NO UTILIZAR)

  // Nuevo array
  const colores = [
    "Amarillo",
    "Gris",
    "Negro",
    "Blanco",
    "Rojo",
    "Verde",
    "Azul",
  ];
  const nuevoArray = personas.concat(colores);
  console.log("paso 8", nuevoArray);
  //Repaso

  personas.forEach((t) => {
    console.log("ForEach", t);
  });
  for (let i = 0; i < personas.length; i++) {
    console.log("for normal", personas[i]);
  }
}

function ejercicioSiete() {
  // Array
  const personas = ["Pepita", "Pepito", "Juanita", "Juanito", "Pepe", "Pepa"];
  // Mostrar todas las personas en el HTML
  const listaPersonas = document.getElementById("personas");
  listaPersonas.innerHTML = "Lista personas: " + personas;

  //Mostrar persona por persona (interpolacion)
  const listaPersonasDiv = document.getElementById("listaPersonas");
  let listaPersonasHtml = "";
  let separadores = "";
  personas.forEach((e) => {
    separadores += '<h2 style="color:red">-----</h2>';
    listaPersonasHtml += `<h2> ${e} </h2>`;
  });
  listaPersonasDiv.innerHTML = listaPersonasHtml + separadores;
}
///ejercicio 8 While
function ejercicioOcho() {
  let contador = 0;
  while (contador < 10) {
    console.log(`Numero: ${contador}`);
    contador++; //contador=contador+1
  }
  // respuesta correcta
  let respuesta = prompt("Ingresa la capital del quindio");
  respuesta = respuesta.toLowerCase();

  while (respuesta !== "armenia") {
    alert("Intentalo de nuevo");
    respuesta = prompt("Ingresa la capital del quindio").toLowerCase();
  }
}

/**
 * ejercicio 9:
 * Do While
 */
function ejercicioNueve() {
  let contador = 10;

  do {
    console.log(`Numero : ${contador}`);
    contador++; // contador = contador + 1
  } while (contador < 10);
}
/**
 * ejercicio 10:
 * Input
 */

function ejercicioDiez() {
  //traemos el input
  const campoTexto = document.getElementById("inputText");
  const campoTextoH2 = document.getElementById("textoHtml");
  //Agregar texto al input
  //campoTexto.value = "Hola input text";
  //obtener valor del input
  const texto = campoTexto.value;
  campoTextoH2.innerHTML = texto;
  setTimeout(() => {
    campoTextoH2.innerHTML = "";
  }, 3000);
}

/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
btnExerciseOne.onclick = function () {
  ejercicioUno();
};
btnExerciseTwo.onclick = function () {
  ejercicioDos();
};
btnExerciseThree.onclick = function () {
  ejercicioTres();
};
btnExerciseFour.onclick = function () {
  ejercicioCuatro();
};
btnExerciseFive.onclick = function () {
  ejercicioCinco();
};
btnExerciseSix.onclick = function () {
  ejercicioSeis();
};
btnExerciseSeven.onclick = function () {
  ejercicioSiete();
};
btnExerciseEight.onclick = function () {
  ejercicioOcho();
};
btnExerciseNine.onclick = function () {
  ejercicioNueve();
};
btnExerciseTen.onclick = function () {
  ejercicioDiez();
};
