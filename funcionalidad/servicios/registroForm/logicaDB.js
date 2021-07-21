const RegistroForm = require('./registroForm.model');

const crearRegistroFormDB = async (registroForm) => {
    let respuesta = await RegistroForm.create(registroForm);
    return respuesta;
}

const obtenerRegistroFormDB = async () => {
    let respuesta = await RegistroForm.find();
    return respuesta;
}

const obtenerRegistroFormIdDB = async (id) => {
    let respuesta = await RegistroForm.findById(id);
    return respuesta;
}


module.exports = {
    crearRegistroFormDB,
    obtenerRegistroFormDB,
    obtenerRegistroFormIdDB
}