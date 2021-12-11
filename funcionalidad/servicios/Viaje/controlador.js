const logicaDB = require('./logicaDB');

const crearViaje = async (req,res) => {
    let viaje = req.body;
     try {
         let respuesta = await logicaDB.crearViajeDB(viaje);
         res.status(200).json({
            'viaje': respuesta
         });
         return;
     } catch (error) {
         res.status(500).json({
             error
         });
         return;
     }
}

const obtenerViaje = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerViajeDB();
        res.status(200).json({
            'viajes': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const obtenerViajeId = async (req,res) =>{
    let id = req.params.id

    try {
        let respuesta = await logicaDB.obtenerViajeIdDB(id);
        res.status(200).json({
            'viajes_usuario': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

module.exports = {
    crearViaje,
    obtenerViaje,
    obtenerViajeId,
}