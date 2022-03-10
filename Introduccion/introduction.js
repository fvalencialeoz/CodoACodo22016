// introduccion a javaScript

// variables
// var let const

// Siempre que se pueda, usar const
// siempre que se pueda, usar let

/* 
var n = "1";
let m = "1";
const v = "2"; */

// condicionales
// if else

/* if (true || false) {
  return;
} else {
  return;
} */

// bucles
// for while do while

/* let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  const e = arr[i];
  console.log(e);
} */

// Los objetos json son una forma de representar datos en una sola variable
// estructura de clave valor

/* const obj = {
  clave: "valor",
};


console.log(obj); */

// agregar nueva propiedad
// objeto.nuevaPropiedad = "valor"

/* obj.nombre = "nueva prop";
console.log(obj); */

// destructuracion de objetos
// const { nombre, apellido } = persona;

/* const { nombre } = obj;
console.log(nombre); */

// spread operator
// const nuevoArray = [...array];

/* const nuevoObj = {
  ...obj,
  nombre: "Nico",
};

console.log(nuevoObj); */

//null undefined
// null no tiene ningun valor
// undefined no esta definido

/* let x;
let y = null;

console.log(x, y); */

// arrow functions

/* function fnA() {
  console.log(this);
  return "hola, soy una funcion normal";
}

const fnAA = () => {
  console.log(this);
  return "hola, soy una funcion de flecha";
}; */

// fnA();
//fnAA();

// lista de usuarios

 const users = [
  { name: "Nico", age: 29, profession: "developer" },
  { name: "Juan", age: 16, profession: "student" },
  { name: "Emma", age: 49, profession: "recruit" },
  { name: "Luis", age: 57, profession: "developer" },
  { name: "Isabella", age: 957789, profession: "devops" },
  { name: "Claudia", age: 20, profession: "free" },
];

console.log(users.filter(    (user) => user.age > 18       ));

const search = "s";
const filteredUsers = users.filter(  (user) =>
  user.name.toLowerCase().includes(search.toLowerCase()) && (user.age >60));

console.log(search.toLowerCase());
console.log(search.toUpperCase());
console.log(filteredUsers); 

/* const arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArr = (arr) => {
  const arrB = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrB.push(arr[i]);
  }

  return arrB;
};

const res = reverseArr(arrA);
console.log(res);
 */

// const generos = {
//   accion: "accion",
//   ficcion: "ficcion",
//   comica:"comica"
// };

// let pelicula = {
//   id: "1",
//   titulo: "El padrino",
//   actores: "De Niro",
//   genero: generos.accion,
// };

// const pelicula2 = {
//   ...pelicula,
//   id: "2",
//   titulo: "El padrino 2",
//   genero:generos.comica
// };



// console.log(pelicula2);


const personas = [
  {
    nombre: "Nico",
    apellido: "Sartori",
    edad: "30",
    direccion: {
      calle: "Siempreviva",
      numero: "147",
      ciudad: "Posadas",
      pais: "Argentina",
    },

    saludar: function () {
      return "Hola, me llamo " + this.nombre + " " + this.apellido;
    },
  },

  {
    nombre: "Juan",
    apellido: "Perez",
    edad: "16",
    direccion: {
      calle: "Tulipan",
      numero: "3427",
      ciudad: "Cordoba",
      pais: "Argentina",
    },

    saludar: function () {
      return "Hola, me llamo " + this.nombre + " " + this.apellido;
    },
  },
];
// como acceder a la propiedad nombre de cada objeto?
// let nombre1 = personas[0].nombre
// let { nombre } = personas[0];
// console.log(nombre);

// // como acceder a la propiedad direccion de cada objeto?

// let { direccion } = personas[0];
// console.table(direccion);
// es posible ejecutar una funcion dentro de un objeto?
console.log(personas[1].saludar());

// como acceder a la propiedad saludar de cada objeto?

console.log(personas[0].saludar);

// crear una nueva persona en el array de objetos
personas.push({
  nombre: "Carlos",
  apellido: "Sivori",
  edad: "53",
  direccion: {
    calle: "Teodoro",
    numero: "3333",
    ciudad: "Caba",
    pais: "Argentina",
  },

  saludar: function () {
    return "Hola, me llamo " + this.nombre + " " + this.apellido;
  },
});
console.table(personas);
console.log(personas[2].saludar());


personas.push({...personas[2],
    nombre: "Fernanda",
    apellido: "Valencia",
    edad: "52"}
  )
  console.table(personas[3].direccion);
// desestructurar una persona
let {nombre, apellido, edad, direccion} = personas[0];

console.log(nombre,apellido, edad, direccion);

// desestructurar la calle de la direccion de una persona
let {calle} = personas[0].direccion;
console.log(calle);

// crear un nuevo objeto usando el spread operator, que mantenga las propiedades de direccion y edad de la persona[1]
const nuevaPersona = [{ 
  ...personas[1],
  nombre: "Nuevo",
  apellido: "NuevoApellido",
  direccion: {...personas[1].direccion,
  },
}];
console.log(nuevaPersona[0]);

// const buscar = "Cordoba";
// const filteredPersona = personas.filter(  (persona) =>
// persona.direccion.ciudad.toLowerCase().includes(buscar.toLowerCase()));
// console.log(filteredPersona);

// filteredPersona.splice();
// console.table(personas);
// // destructuracion de objetos
// const { nombre, apellido } = persona;

// eliminar la persona con nombre "Nico" del array de objetos
// splice tienen 3 parametros, el primero es la posicion del elemento a eliminar, el segundo es la 
// cantidad de elementos a eliminar, y el tercero es el elemento a agregar (en caso de que sea necesario)
// personas.splice(2,1);  //elimina el elemento 2 del array

personas.splice(
  personas.findIndex((persona) => persona.nombre === "Nico"),1
);
console.table(personas);
// destructuring

/* const persona = {
  nombre: "Nico",
  apellido: "Sanchez",
};

const animal = {
  nombre: "otro",
  apellido: "otro",
};

let { nombre } = animal;
[nombre];

console.log(nombre); */

// destructuring arrays

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [a, b, c, d, e, f, g, h, i, j] = arr; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// const [a, , , , , , , , , j] = arr; // 1, 9
