//Transpilar a JS
//tsc nombre-archivo.ts

let a: number = 1;

console.log(a);

function fn() {
  let b = 1; //Variables de bloque
  var c = 1;
  if (true) {
    let b = 2;
    var c = 2;
  }
  console.log(b);
  console.log(c);
}

fn();

a = 9;

const NUM_MAX = 4;
//NUM_MAX = 0

//Tipos  de datos
const unNumero: number = 3;
const unTexto: string = "Un texto";
const esVerdad: boolean = true;

// const otroDato= 'Otro texto'
// otroDato = 2

//Variable de multiples tipos
let esNull: string | null | number = null;
// esNull = 0
// esNull =false

// Nuestro propio tipo de datos
type StrONullONum = string | null | number;

const texto1: StrONullONum = null;

const arrNumeros1: Array<number> = [1, 2, 3, 4];
const arrNumeros2: number[] = [1, 2, 3, 4];

let cualquierTipo: any = 4;
cualquierTipo = "Un texto";
cualquierTipo = [1, "", false];

interface Persona {
  nombre: string;
  apellidos: string;
  email: string;
  fechaNacimiento?: Date;
}

const falco: Persona = {
  nombre: "Charles",
  apellidos: "Falco",
  email: "c.falco@gmail.com",
  fechaNacimiento: new Date(1980, 2, 12),
  //   dni: '0000000T'
};

const mesesEs = ["Enero", "Febrero", "Marzo", "Abril"];
console.log(mesesEs[falco.fechaNacimiento.getMonth()]);
console.log(falco.fechaNacimiento);

interface Actor extends Persona {
  peliculas: Array<string>;
}

const jsonStathan: Actor = {
  nombre: "JSON",
  apellidos: "Stathan",
  email: "json.stathan@gmail.com",
  fechaNacimiento: new Date(),
  peliculas: ["The expendables", "Transporter"],
};

const yamlStathan: Actor = {
  nombre: "YAML",
  apellidos: "Stathan",
  email: "yaml.stathan@gmail.com",
  //fechaNacimiento: new Date(),
  peliculas: ["The expendables", "Transporter"],
};

// ... Rest operator
function getNumLoteria(idSorteo: number, ...nums: Array<number>): string {
  const sorteos = ["La primitiva", "El euromillon", "La bonoloto"];
  console.log(nums);
  return "Sorteo " + sorteos[idSorteo] + " - " + nums.join(", ");
}
const resultado = getNumLoteria(1, 3, 12, 17, 28, 29, 46);
console.log(resultado);

function getNumLoteria2(idSorteo: number, nums: Array<number>): string {
  const sorteos = ["La primitiva", "El euromillon", "La bonoloto"];
  console.log(nums);
  return "Sorteo " + sorteos[idSorteo] + " - " + nums.join(", ");
}
const resultado2 = getNumLoteria2(1, [3, 12, 17, 28, 29, 46]);
console.log(resultado);

// ... Spread Operator

const series = ["Hunters", "Gangland Undercover", "Vikings"];
const series2 = series;
series2.push("The Walking Dead");

console.log(series); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead"];
console.log(series2); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead"];

// Antes del spreed opreator
const series3 = [].concat(series);
series3.push("Taboo");
console.log(series); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead"];
console.log(series3); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead", "Taboo"];

const series4 = series.slice();
series4.push("The leftovers");
console.log(series); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead"];
console.log(series4); // ["Hunters", "Gangland Undercover", "Vikings", "The Walking Dead", "Taboo"];

// Con el spread operator
const series5 = [...series];
// const series6 = [series]
console.log(series5);
// console.log(series6)

// const xmlStatham = {...jsonStathan}
// xmlStatham.nombre = 'XML'
const xmlStatham = { ...jsonStathan, nombre: "XML" };

console.log(jsonStathan);
console.log(xmlStatham);

const xmlStatham2 = Object.assign({}, jsonStathan, {
  nombre: "XML",
  telefono: "691478861",
});
console.log(xmlStatham2);

//Optional chaining operator
const datosPersona = {
  direccion: {
    tipo: "calle",
    numero: 8,
    nombre: "nombre",
  },
  telefonos: {
    movil: {
      prefijo: "+34",
      numero: "691478861",
    },
  },
};

console.log(datosPersona.telefonos.movil.numero);

const datosPersona2 = {
  direccion: {
    tipo: "calle",
    numero: 8,
    nombre: "nombre",
  },
  telefonos: {
    fijo: {
      prefijo: "+34",
      numero: "691478861",
    },
  },
};

console.log(datosPersona2?.telefonos?.fijo?.numero || "No tiene movil");

// Desestructuración de arrays y objetos
// const direccion = datosPersona2.direccion
// const telefonos = datosPersona2.telefonos

const { direccion: dir, telefonos } = datosPersona2;
dir.tipo = "avenida";
console.log(datosPersona2.direccion);
console.log(dir);

const colores = ["blanco", "negro", "gris"];
const [_, negro, g] = colores;
console.log(g);
