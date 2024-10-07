const { modeloUsuario } = require("../tablaUsuario")
const sequelize = require("sequelize");

// *Obteniendo datos de la tabla con base al modelo general
async function dataTableUsuarioSP(dataFiltersFront = {}) {
  try {
   console.log(7, dataFiltersFront)
    const resultTableUsuarioSP  = await modeloUsuario.sequelize.query(
        'EXEC sp_InsertarUsuarioConValidacion @Nombre = :Nombre, @Telefono = :Telefono, @Pais = :Pais, @Departamento = :Departamento, @Municipio = :Municipio, @Direccion = :Direccion',
        {
            replacements: {
                Nombre: dataFiltersFront.Nombre,
                Telefono: dataFiltersFront.Telefono,
                Pais: dataFiltersFront.Pais,
                Departamento: dataFiltersFront.Departamento,
                Municipio: dataFiltersFront.Municipio,
                Direccion: dataFiltersFront.Direccion
            },
            type: sequelize.QueryTypes.RAW, // El tipo puede ser INSERT ya que se están insertando datos
            raw: true // Para obtener datos en bruto (sin envolver en un modelo)
        }
        )

    // Imprimir los resultados en la consola
    console.log(25, resultTableUsuarioSP);

    return {
        data:resultTableUsuarioSP
    };
  } catch (err) {
    throw new Error(err.message || err.stack || 'error / line 31 TableUserModel')
  }
}

module.exports = {
    dataTableUsuarioSP,
};
