const { dataTableUsuarioSP } = require("../../models/coink/defines/ingresarUsuarioSP");

const tablaUsuarioSP = async (req, res) => {
    try {
      console.log(5, req.body);  // Se Verifica qué se está recibiendo en la consulta
       const resultTablaUsuarioSP = await dataTableUsuarioSP(req.body)
        res.send(resultTablaUsuarioSP)
      } catch(err) {
        console.error('Error en la consulta:', err);
        res.status(400).send({
          mns: err.message || 'Error en la consulta'
        })
      } 
}

module.exports = {
    tablaUsuarioSP
};

