'use strict';

var express = require('express');
var Article = require('../controllers/chaza');

//Llamamos al objeto router de express
var router = express.Router();

//Rutas para los articulos:

router.post('/saveChaza',Article.save);

router.get('/chazas',Article.getArticles);

router.delete('/deleteChaza/:id',Article.delete);

module.exports = router;

