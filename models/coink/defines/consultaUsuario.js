const { modeloUsuario } = require("../tablaUsuario")
//const sequelize = require("sequelize");

// *Obteniendo datos de la tabla con base al modelo general
async function dataTableUsuario(dataFiltersFront = {}) {
  try {
   console.log(7, dataFiltersFront)
    const resultTableUsuario  = await modeloUsuario.findAll({
          where:{ ...dataFiltersFront},
          raw: true
    });
    // Imprimir los resultados en la consola
    console.log(13, resultTableUsuario);

    return {
        data:resultTableUsuario
    };
  } catch (err) {
    throw new Error(err.message || err.stack || 'error / line 19 TableUserModel')
  }
}

module.exports = {
    dataTableUsuario,
};
