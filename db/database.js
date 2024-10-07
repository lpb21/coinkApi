const { Sequelize, QueryTypes } = require("sequelize");
const tedious = require("tedious");
const { Config } = require("../src/config/index")

// *Conexion a BD MsSQL
const sequelizeMsSQL = new Sequelize (Config.mssql_db, Config.mssql_usr_adm, Config.mssql_pass_adm, {
  host: Config.mssql_host,
  dialect: Config.mssql_dialect,
  dialectModule: tedious,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 20000,
  },
  dialectOptions: {
    connectTimeout: 60000, // Tiempo de espera en milisegundos
  },
});

// * Verificacion de la autenticacion con MsSQL
 /*async function mssql() {
  try {
    await sequelizeMsSQL.authenticate();
    console.log("conexion exitosa con mssql");
  } catch (error) {
    console.log(error);
  }
  console.log(sequelizeMsSQL.host)
}
mssql();*/

module.exports = { Sequelize, sequelizeMsSQL};
