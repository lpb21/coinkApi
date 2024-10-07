const { DataTypes } = require("sequelize");
const { sequelizeMsSQL } = require("../../db/database");

/* // ! Modelo de creacion de la tabla
*/

const tablaUsuario = "Usuario"
// recibe 3 argumentos:
//1 el nombre del modelo o tabla,
//2 atributos
//3 opciones
const modeloUsuario = sequelizeMsSQL.define(
//const modeloGeneral = sequelizeMsSQL.define(
  tablaUsuario,
  {
    UsuarioID: {
      type: DataTypes.INTEGER,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    Telefono: {
      type: DataTypes.STRING,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    PaisID: {
      type: DataTypes.INTEGER,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    DepartamentoID: {
      type: DataTypes.INTEGER,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    },
    MunicipioID: {
      type: DataTypes.INTEGER,
      //primaryKey: true,
      //autoIncrement: true,
      allowNull: false,
    }
  },
  {
    //la tabla se llama igual al nombre que se definio arriba
    freezeTableName: true,
    // evita la creacion de las columnas createdAt y updateAt
    timestamps: false,
    // Indica que no se utilizará la columna por defecto 'id'
    id: false
  }
);
//Remueve el campo "ID" que sequelize genera por defecto
modeloUsuario.removeAttribute("id");

module.exports = {
  modeloUsuario
};
