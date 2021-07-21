const express = require('express');
const router = express.Router();
const controlador = require('../servicios/registroForm/controlador');

router.post('/crear-registro', controlador.crearRegistroForm);

router.get('/obtener-registro', controlador.obtenerRegistroForm);

router.get('/obtener-registro/:id', controlador.obtenerRegistroFormId);


module.exports = router;