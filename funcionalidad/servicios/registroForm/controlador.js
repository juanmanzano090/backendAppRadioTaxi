const logicaDB = require('./logicaDB');

const crearRegistroForm = async (req,res) => {
    let registroForm = req.body;
     try {
         let respuesta = await logicaDB.crearRegistroFormDB(registroForm);
         res.status(200).json({
            'registro': respuesta
         });
         return;
     } catch (error) {
         res.status(500).json({
             error
         });
         return;
     }
}

const obtenerRegistroForm = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerRegistroFormDB();
        res.status(200).json({
            'registro': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const obtenerRegistroFormId = async (req,res) =>{
    let id = req.params.id;

    try {
        let respuesta = await logicaDB.obtenerRegistroFormIdDB(id);
        res.status(200).json({
            'registro': respuesta
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
    crearRegistroForm,
    obtenerRegistroForm,
    obtenerRegistroFormId,
}