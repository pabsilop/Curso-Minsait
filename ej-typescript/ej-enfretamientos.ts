const equipos: Array<string> = [
  "R.Madrid",
  "Barcelona",
  "Valencia",
  "Villareal",
  "Sevilla",
];

// const equipos = ['R.Madrid', 'Barcelona', 'Valencia', 'Villareal']

/**
 * R. Madrid vs Betis
 * Villareal vs Valencia
 */
/**
 * Valencia vs Betis
 * Real Madrid vs Villareal
 */

// const equipos = ['R.Madrid', 'Barcelona', 'Valencia', 'Villareal', 'Sevilla']

/**
 * R. Madrid vs Betis
 * Villareal vs Valencia
 * Sevilla pasa a la siguiente ronda
 */
/**
 * Sevilla vs Betis
 * Valencia vs Villareal
 * R. Madrid pasa a la siguiente ronda
 */

// Desestruturaciones
// Rest operator
// Recursion

// Devuelve un array de equipos con el orden cambiado

function shuffle(equipos) {
  let idActual = equipos.length,
    idRandom;

  while (idActual != 0) {
    idRandom = Math.floor(Math.random() * idActual);
    idActual--;

    [equipos[idActual], equipos[idRandom]] = [
      equipos[idRandom],
      equipos[idActual],
    ];
  }

  return equipos;
}

// Muestra por consola los enfrentamientos
function getEnfrentamientos(equipos: Array<string>): any {
  shuffle(equipos);
  const [a, b, c, d, e] = equipos;
  console.log("- " + a + " vs " + b + "- ");
  console.log("- " + c + " vs " + d + "- ");
  console.log("- " + e + " pasa a la siguiente ronda -");
}

getEnfrentamientos(equipos);
