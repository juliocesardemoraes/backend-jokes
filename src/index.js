import express from "express";
import cors from "cors";
import { piadas } from "./mock.js";

// URL - Metodo - Headers - Body

const app = express();
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/batata", (request, response) => {
  return response.status(200).send({ batata: true });
});

app.get("/piadas", (request, response) => {
  const randomNum = getRandomInt(piadas.length);
  return response.status(200).send({ piada: piadas[randomNum] });
});

app.listen("3000");
