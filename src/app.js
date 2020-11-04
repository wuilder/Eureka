const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);  // Seteo PUERTO 

app.set(express.json());                    // Para que el servidor pueda entender formato JSON


module.exports = app;