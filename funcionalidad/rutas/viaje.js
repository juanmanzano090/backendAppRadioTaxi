const express = require('express');
const router = express.Router();
const controlador = require('../servicios/Viaje/controlador');

router.post('/crear-viaje', controlador.crearViaje);

router.get('/obtener-viajes', controlador.obtenerViaje);

router.get('/obtener-viajes-usuario/:id', controlador.obtenerViajeId);


module.exports = router;