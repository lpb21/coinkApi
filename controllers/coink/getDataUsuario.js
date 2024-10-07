const { dataTableUsuario } = require("../../models/coink/defines/consultaUsuario");

const tablaUsuario = async (req, res) => {
    try {
      console.log(5, 'AQUII!!', req.body);  // Verifica qué estás recibiendo en la consulta
       const resultTablaUsuario = await dataTableUsuario(req.body)
        res.send(resultTablaUsuario)
      } catch(err) {
        console.error('Error en la consulta:', err);
        res.status(400).send({
          mns: err.message || 'Error en la consulta'
        })
      } 
}

module.exports = {
    tablaUsuario
};

