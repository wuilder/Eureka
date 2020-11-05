const express = require('express');
const user = require('./user');
const app = express();

app.set('port', process.env.PORT || 5000);  // Seteo PUERTO 

app.set(express.json());                    // Para que el servidor pueda entender formato JSON

app.use('/api/heroes', require('./routs/heroes-rout'));
app.use('/api/users', require('./routs/favorite-rout'));
app.use((req, res, next) =>{
  res.status(404).json({ message: "Page Not Found" });
});

module.exports = app;