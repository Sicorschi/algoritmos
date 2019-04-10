/*
Practica Ejemplo #1:
Como se ha mecionado en la definicion un algoritmo es una secuencia de pasos.
Paso #1:
  Importar dependencias para poder usar los metodos especificos de estos modulos.
Paso #2:
  Utilizar esos metodos y crear una instancia (app) mediante el modulo express()
Paso #3:
  Levantar/Iniciar el entorno local o servidor mediante la instancia creada.

Notas:
  Es muy importante mantener un orden de ejecucion, una secuencia por asi decirlo.
  Todo tiene un orden establecido para que funcione, es decir,
  yo no puedo crear una instancia sin haber importado antes las herramientas que me permitan hacerlo.
*/



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.status(200).send({ message: "Peticion GET"})
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
