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
  try {
    if (peticion.body.ciudad) {
      const usuarioCreado = await prisma.user.create({
        data: {
          nombre: peticion.body.nombre,
          apellido: peticion.body.apellido,
          edad: Number(peticion.body.edad),
          ciudad: {
            connectOrCreate: {
              where: { nombre: peticion.body.ciudad },
              create: { nombre: peticion.body.ciudad },
            },
          },
        },
      });
      respuesta.json(usuarioCreado);
    } else {
      const usuarioCreado = await prisma.user.create({
        data: {
          nombre: peticion.body.nombre,
          apellido: peticion.body.apellido,
          edad: Number(peticion.body.edad),
        },
      });
      respuesta.json(usuarioCreado);
    }
  } catch (error) {
    respuesta.send("Error:" + error);
  }
});

server.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});
