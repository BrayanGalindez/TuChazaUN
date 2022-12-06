'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Initilizations
const app = express();

//Settings
const port = 3900;

var url = 'mongodb://localhost:27017/api_rest_reactnotas';

mongoose.Promise = global.Promise;

var article_routes = require('./routes/article');

var chaza_routes = require('./routes/chaza');

//Cargamos body-parser, es un middleware para analizar cuerpos a traves de la URL
app.use(bodyParser.urlencoded({extended: false}));

//Cualquier petición la convertimos a json:
app.use(bodyParser.json());

//Activamos el CORS para permitir las peticiones AJAX Y HTTP desde el frontend:
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Alow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.use('/api', article_routes);
app.use('/api', chaza_routes);

mongoose.connect(url,{useNewUrlParser: true}).then(() =>{
    console.log('Conexion a la bdd realizada con exito!!!');
    app.listen(port, () => {
        console.log('Lanzando la aplicación en el puerto ' + port);
    });

})
