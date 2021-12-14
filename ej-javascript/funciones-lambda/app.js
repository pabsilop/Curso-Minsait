const series = [
  { titulo: "Serie 1", vista: true, numEpisodios: 30 },
  { titulo: "Serie 2", vista: true, numEpisodios: 120 },
  { titulo: "Serie 3", vista: false, numEpisodios: 10 },
  { titulo: "Serie 4", vista: true, numEpisodios: 110 },
  { titulo: "Serie 5", vista: false, numEpisodios: 40 },
  { titulo: "Serie 6", vista: true, numEpisodios: 20 },
  { titulo: "Serie 7", vista: false, numEpisodios: 50 },
  { titulo: "Serie 8", vista: true, numEpisodios: 10 },
];

const seriesVistas = series.filter((serie) => {
  return serie.vista;
});

const titulosSeriesVistas = seriesVistas
  .map((serie) => serie.titulo)
  .join(", ");

const todosLosTitulos = series.map((serie) => serie.titulo).join(", ");

console.log(seriesVistas);
console.log(titulosSeriesVistas);
console.log(todosLosTitulos);

const seriesVistas2 = [];
series.forEach((serie) => {
  if (serie.vista) {
    seriesVistas2.push(serie.titulo);
  }
});

console.log(seriesVistas2);

const serieMuyLarga = series.find((serie) => serie.numEpisodios > 100);

console.log(serieMuyLarga);

const maxEpisdios = Math.max(...series.map((s) => s.numEpisodios));
const serieConMasEpisodios = series.find(
  (serie) => serie.numEpisodios === maxEpisdios
);
console.log({ maxEpisdios });
console.log({ serieConMasEpisodios });

const numTotalEpisodiosVistos = series.reduce((acc, serie) => {
  const num = serie.vista ? serie.numEpisodios : 0;
  return (acc += serie.numEpisodios);
});

console.log(numTotalEpisodiosVistos);

const nuevasSeries = [].concat(series);

console.log(nuevasSeries);
