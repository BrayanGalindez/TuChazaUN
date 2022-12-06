'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    title: String,
    content: String
})
module.exports = mongoose.model('Chaza', ArticleSchema)