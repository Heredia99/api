import express from "express";
import config from "./config.js";
import dni_validate from "./dni_validate.js";
import furniture_validate from "./furniture_validate.js";
import request_validate from "./request_validate.js";

const app = express();

config(app);

app.get("/", (req, res) => {
  res.status(200).json({ data: "recibido" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const { action, nombre, dni, direccion_solicitada, muebles } = req.body;
  let respuesta;

  if (action === "dni_validation")
    respuesta = {
      ...req.body,
      ...dni_validate(dni),
    };
  else if (action === "request_validation")
    respuesta = {
      ...req.body,
      ...request_validate(direccion_solicitada),
    };
  else if (action === "blacklist_validation")
    respuesta = {
      ...req.body,
      ...furniture_validate(muebles),
    };
  else if (action === "name_validation")
    respuesta = {
      ...req.body,
      nombre,
      nombre_normalizado: "Juan Español",
      nombre_valido: !nombre.includes("manolo"),
    };
  res.status(201).json(respuesta);
});

app.listen("9000", () => console.log("Servidor abierto en localhost:9000"));
