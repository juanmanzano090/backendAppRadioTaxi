const Egreso = require('./egreso.model');

const crearEgresoDB = async (egreso) => {
    let respuesta = await Egreso.create(egreso);
    return respuesta;
}

const obtenerEgresoDB = async () => {
    let respuesta = await Egreso.find().populate('id_usuario');
    return respuesta;
}

const obtenerEgresoIdDB = async (id) => {
    let respuesta = await Egreso.find({id_usuario: id}).populate('id_usuario');
    return respuesta;
}


module.exports = {
    crearEgresoDB,
    obtenerEgresoDB,
    obtenerEgresoIdDB
}
