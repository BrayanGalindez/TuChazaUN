'use strict'

const { models } = require('mongoose');
var Chaza = require('../models/chaza');

//Creamos un objeto para disponer de todos los metodos de ruta que vamos a definir:

var controller = {
    //Metodo para guardar una chaza:
    saveChaza: (req, res) => {
        var params = req.body;

        var chaza = new Chaza();
        //Asignamos los valores
        chaza.title = params.title;
        chaza.content = params.content;
        //Guardamos el archivo
        chaza.save((err, chazaStored) => {
            if(err || !chazaStored){
                return res.status(404).send({
                    status : 'Error',
                    message: 'No se ha añadido la chaza de forma correcta'
                });
            }
            return res.status(200).send({
                status: 'Success',
                chazaStored
            });
        });
    },
    //Metodo para listar los articulos:

    getChaza : (req, res) => {
        var query = Chaza.find({});

        query.sort('-date').exec((err, chazas) =>{
            if (err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer los datos'
                });
            }
            if (!chazas){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay chazas para mostrar'
                });
            }
            return res.status(200).send({
                status: 'Success',
                chazas
            });
        });
    },
    //Metodo para eliminar un articulo
    deleteChaza: (req, res) => {
        //Recoger el id a traves de la url:
        var chazaId = req.params.id;

        Chaza.findOneAndDelete({_id: chazaId}, (err, chazaRemove) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al dar de baja la chaza'
                });
            }
            if(!chazaRemove){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado la chaza a eliminar'

                });
            }
            return res.status(200).send({
                status: 'success',
                chaza: chazaRemove
            });
        });
    }
}

module.exports = controller;