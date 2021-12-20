const http = require("http");
const express = require("express");
const cors = require("cors");
const appRoutes = require("./routes");

const app = express(appRoutes);

app.use(
  cors({
    origin: ["http://localhost:4200"],
  })
);

app.use(express.json());

app.use(appRoutes);

const server = http.createServer(app);

server.listen(3200, () => {
  console.log("Listening on http://localhost:3200");
});
