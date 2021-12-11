const Viaje = require('./viaje.model');

const crearViajeDB = async (viaje) => {
    let respuesta = await Viaje.create(viaje);
    return respuesta;
}

const obtenerViajeDB = async () => {
    let respuesta = await Viaje.find().populate('id_usuario');
    return respuesta;
}

const obtenerViajeIdDB = async (id) => {
    let respuesta = await Viaje.find({id_usuario: id}).populate('id_usuario');
    return respuesta;
}


module.exports = {
    crearViajeDB,
    obtenerViajeDB,
    obtenerViajeIdDB
}
