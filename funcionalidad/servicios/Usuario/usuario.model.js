const mongoose = require('mongoose');
const { Schema } = mongoose;

const Usuario = new Schema({
    nombre:String,
    apellido:String,
    rut: { type: Number,default: null },
    dv: String,
    correo: String,
    password: String,
});

module.exports = mongoose.model('Usuario',Usuario)

