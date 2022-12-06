'use strict';

var express = require('express');
var Chaza = require('../controllers/chaza');
//Llamamos al objeto router de express
var router = express.Router();

//Rutas para las chazas:

router.post('/saveChaza',Chaza.saveChaza);

router.get('/getChaza',Chaza.getChaza);

router.delete('/deleteChaza/:id',Chaza.deleteChaza);

module.exports = router;

