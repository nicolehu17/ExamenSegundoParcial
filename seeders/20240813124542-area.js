'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('area', [
      { nombre: 'Básica', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Profesionalizante', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Titulación', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('area', null, {});
  }
};
