const logicaDB = require('./logicaDB');

const crearUsuario = async (req,res) => {
    let usuario = req.body;
     try {
         
         let respuesta = await logicaDB.crearUsuarioDB(usuario);
         res.status(200).json({
            'usuario': respuesta
         });
         return;
     } catch (error) {
         res.status(500).json({
             error
         });
         return;
     }
}

const obtenerUsuario = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerUsuarioDB();
        res.status(200).json({
            'usuarios': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const obtenerUsuarioId = async (req,res) =>{
    let id = req.params.id;

    try {
        let respuesta = await logicaDB.obtenerUsuarioIdDB(id);
        res.status(200).json({
            'usuarios': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const obtenerLoginId = async (req,res) =>{

    let correo = req.params.correo;



    try {
        let respuesta = await logicaDB.obtenerLoginIdDB({correo});
        res.status(200).json({
            'usuarios': respuesta
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
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarioId,
    obtenerLoginId,
}