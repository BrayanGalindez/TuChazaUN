'use strict';

var express = require('express');
var Article = require('../controllers/chaza');

//Llamamos al objeto router de express
var router = express.Router();

//Rutas para las chazas:

router.post('/saveChaza',Article.saveChaza);

router.get('/getChaza',Article.getChaza);

router.delete('/deleteChaza/:id',Article.deleteChaza);

module.exports = router;

