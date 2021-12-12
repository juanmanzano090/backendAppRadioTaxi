const express = require('express');
const router = express.Router();
const controlador = require('../servicios/Usuario/controlador');

router.post('/crear-usuario', controlador.crearUsuario);

router.get('/obtener-usuarios', controlador.obtenerUsuario);

router.get('/obtener-registro/:id', controlador.obtenerUsuarioId);

router.get('/obtener-login/:nombre', controlador.obtenerLoginId);


module.exports = router;