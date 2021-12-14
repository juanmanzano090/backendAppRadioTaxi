const Usuario = require('./usuario.model');

const crearUsuarioDB = async (usuario) => {
    let respuesta = await Usuario.create(usuario);
    return respuesta;
}

const obtenerUsuarioDB = async () => {
    let respuesta = await Usuario.find();
    return respuesta;
}

const obtenerUsuarioIdDB = async (id) => {
    let respuesta = await Usuario.findById(id);
    return respuesta;
}

const obtenerLoginIdDB = async (correo) => {
    let respuesta = await Usuario.findOne(correo);
    return respuesta;
}


module.exports = {
    crearUsuarioDB,
    obtenerUsuarioDB,
    obtenerUsuarioIdDB,
    obtenerLoginIdDB
}