'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.belongsTo(models.Area, { foreignKey: 'id_area', as: 'Area' });
    }
  }
  Materia.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    créditos: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    id_area: {
      type: DataTypes.INTEGER,
      references: {
        model: 'area', // Asegúrate de que el nombre de la tabla sea el correcto
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};
