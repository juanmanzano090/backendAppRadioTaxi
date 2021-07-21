const logicaDB = require('./logicaDB');

const crearEgreso = async (req,res) => {
    let egreso = req.body;
     try {
         let respuesta = await logicaDB.crearEgresoDB(egreso);
         res.status(200).json({
            'egreso': respuesta
         });
         return;
     } catch (error) {
         res.status(500).json({
             error
         });
         return;
     }
}

const obtenerEgreso = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerEgresoDB();
        res.status(200).json({
            'egresos': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const obtenerEgresoId = async (req,res) =>{
    let id = req.params.id

    try {
        let respuesta = await logicaDB.obtenerEgresoIdDB(id);
        res.status(200).json({
            'egresos_usuario': respuesta
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
    crearEgreso,
    obtenerEgreso,
    obtenerEgresoId,
}