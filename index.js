import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyparser from "body-parser";
const server = express();
const prisma = new PrismaClient();

server.use(bodyparser.json());

server.get("/user", async (peticion, respuesta) => {
  const allUsers = await prisma.user.findMany();
  respuesta.json(allUsers);
});

server.post("/user/create", async (peticion, respuesta) => {
  const usuarioCreado = await prisma.user.create({
    data: {
      name: peticion.body.nombre,
      apellido: peticion.body.apellido,
      age: Number(peticion.body.edad),
      ciudad: peticion.body.ciudad,
    },
  });

  respuesta.json(usuarioCreado);
});

server.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});
