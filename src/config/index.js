require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,

//* Variables SQL Server
  mssql_host: process.env.MSSQL_DB_HOST,
  mssql_dialect: process.env.MSSQL_DB_DIALECT,
  mssql_db: process.env.MSSQL_DB_NAME,
  mssql_usr_adm: process.env.MSSQL_DB_USER_ADM,
  mssql_pass_adm: process.env.MSSQL_DB_PASS_ADM,


  

};

