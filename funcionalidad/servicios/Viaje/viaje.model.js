const mongoose = require('mongoose');
const { Schema } = mongoose;

const Viaje = new Schema({
    nombre:String,
    direccion: String,
    destino: String,
    id_usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario',
        default: null
    }
});

module.exports = mongoose.model('Viaje',Viaje)