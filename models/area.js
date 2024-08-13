'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
      Area.hasMany(models.Materia, { foreignKey: 'id_area', as: 'Materias' });
    }
  }
  Area.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Area',
    tableName: 'area', // Asegúrate de que el nombre de la tabla sea el correcto
  });
  return Area;
};
