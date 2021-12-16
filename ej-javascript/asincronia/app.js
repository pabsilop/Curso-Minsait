//CALLBACKS
// const fs = require("fs");

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("3");

// console.log("Inicio");
// fs.readFile("1.txt", (error, data) => {
//   console.log("Datos: " + data.toString());
// });
// fs.readFile("2.txt", (error, data) => {
//   console.log("Datos: " + data.toString());
// });
// fs.readFile("3.txt", (error, data) => {
//   console.log("Datos: " + data.toString());
// });
// console.log("Fin");

// console.log("Inicio");
// fs.readFile("1.txt", (error, data) => {
//   console.log("Datos: " + data.toString());

//   fs.readFile("2.txt", (error, data) => {
//     console.log("Datos: " + data.toString());
//   });

//   fs.readFile("3.txt", (error, data) => {
//     console.log("Datos: " + data.toString());
//   });
// });

// console.log("Fin");

//PROMISE

const fs = require("fs").promises;

// const mensaje = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("El canario está en la jaula");
//     reject("El canario se ha escapado por la ventana");
//   }, 2000);
// });

// console.log(mensaje);

// mensaje
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.readFile("1.txt").then((data) => {
//   console.log(data.toString());

//   fs.readFile("2.txt").then((data) => {
//     console.log(data.toString());
//   });

//   fs.readFile("3.txt").then((data) => {
//     console.log(data.toString());
//   });
// });

// fs.readFile("1.txt")
//   .then((data) => {
//     console.log(data.toString());

//     return fs.readFile("2.txt");
//   })
//   .then((data) => {
//     console.log(data.toString());

//     return fs.readFile("3.txt");
//   })
//   .then((data) => {
//     console.log(data.toString());
//   });

// ASYNC / AWAIT

async function fn() {
  let data;

  try {
    data = await fs.readFile("1.txt");
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }

  data = await fs.readFile("2.txt");
  console.log(data.toString());

  data = await fs.readFile("3.txt");
  console.log(data.toString());
}

fn();
