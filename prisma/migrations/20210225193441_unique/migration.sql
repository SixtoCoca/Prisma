/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[nombre]` on the table `Ciudad`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ciudad.nombre_unique" ON "Ciudad"("nombre");
