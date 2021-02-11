// Esto es equivalente a:
// import express from 'express';
// pero en node esto no funciona (hay librerías de terceros para que funcione)
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
// middleware
app.use(express.static('public')) // establece el directorio público

// Lectura y parseo del body
// extrae el cuerpo de las peticiones json
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'))

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})