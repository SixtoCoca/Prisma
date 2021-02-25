# Iniciar proyecto
Inicializar git y nodejs
```bash
git init      ##Iniciar repositorio git
npm init -y   ##Iniciar proyecto nodejs
```
Inicializar prisma

```bash
npm install prisma -D ##Instalar prisma
npx prisma init       ##Iniciar proyecto prisma
```
Crear base de datos(puerto 5432 es el por defecto en postgress, la variable de entorno POSTGRES_PASSWORD para asignar una contraseña)
```bash
sudo docker run -p 5432:5432 --env POSTGRES_PASSWORD=pass postgres
```
Cambiar en la variable de entorno (.env) la pass y usuario

Crear una migración y aplicar con:
```bash
npx prisma migrate dev --preview-feature
```