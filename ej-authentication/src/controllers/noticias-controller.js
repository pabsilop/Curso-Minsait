const axios = require("axios");
const emitter = require("../utils/emitter");

const createNoticia = (req, res, next) => {
  const noticia = req.body;

  axios.post("http://localhost:3000/noticias", noticia).then((resp) => {
    const nuevaNoticia = resp.data;

    emitter.emit("noticiaCreada", nuevaNoticia);

    res.status(201);
    return res.json(nuevaNoticia);
  });
};

const getNoticias = (req, res, next) => {
  axios.get("http://localhost:3000/noticias").then((resp) => {
    return res.json(resp.data);
  });
};

const getNoticia = (req, res, next) => {
  const { id } = req.params;
  console.log({ id });

  axios.get(`http://localhost:3000/noticias/${id}`).then((resp) => {
    return res.json(resp.data);
  });
};

module.exports = {
  createNoticia,
  getNoticias,
  getNoticia,
};
