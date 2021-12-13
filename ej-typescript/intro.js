//Transpilar a JS
//tsc nombre-archivo.ts
var _a, _b;
let a = 1;
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
const unNumero = 3;
const unTexto = "Un texto";
const esVerdad = true;
// const otroDato= 'Otro texto'
// otroDato = 2
//Variable de multiples tipos
let esNull = null;
const texto1 = null;
const arrNumeros1 = [1, 2, 3, 4];
const arrNumeros2 = [1, 2, 3, 4];
let cualquierTipo = 4;
cualquierTipo = "Un texto";
cualquierTipo = [1, "", false];
const falco = {
    nombre: "Charles",
    apellidos: "Falco",
    email: "c.falco@gmail.com",
    fechaNacimiento: new Date(1980, 2, 12),
    //   dni: '0000000T'
};
const mesesEs = ["Enero", "Febrero", "Marzo", "Abril"];
console.log(mesesEs[falco.fechaNacimiento.getMonth()]);
console.log(falco.fechaNacimiento);
const jsonStathan = {
    nombre: "JSON",
    apellidos: "Stathan",
    email: "json.stathan@gmail.com",
    fechaNacimiento: new Date(),
    peliculas: ["The expendables", "Transporter"],
};
const yamlStathan = {
    nombre: "YAML",
    apellidos: "Stathan",
    email: "yaml.stathan@gmail.com",
    //fechaNacimiento: new Date(),
    peliculas: ["The expendables", "Transporter"],
};
// ... Rest operator
function getNumLoteria(idSorteo, ...nums) {
    const sorteos = ["La primitiva", "El euromillon", "La bonoloto"];
    console.log(nums);
    return "Sorteo " + sorteos[idSorteo] + " - " + nums.join(", ");
}
const resultado = getNumLoteria(1, 3, 12, 17, 28, 29, 46);
console.log(resultado);
function getNumLoteria2(idSorteo, nums) {
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
const xmlStatham = Object.assign(Object.assign({}, jsonStathan), { nombre: "XML" });
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
console.log(((_b = (_a = datosPersona2 === null || datosPersona2 === void 0 ? void 0 : datosPersona2.telefonos) === null || _a === void 0 ? void 0 : _a.fijo) === null || _b === void 0 ? void 0 : _b.numero) || "No tiene movil");
// Desestructuración de arrays y objetos
// const direccion = datosPersona2.direccion
// const telefonos = datosPersona2.telefonos
const { direccion, telefonos } = datosPersona2;
const colores = ["blanco", "negro", "gris"];
const [g, negro, blanco] = colores;
console.log(g);
