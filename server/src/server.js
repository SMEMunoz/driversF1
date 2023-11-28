const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// Configurar el manejador para enviar códigos de estado personalizados
server.use((req, res, next) => {
  // En esta función, puedes personalizar cómo se envían los códigos de estado
  res.statusJson = (status, data) => {
    res.status(status).json(data);
  };
  next();
});

server.use(router);

module.exports = server;
