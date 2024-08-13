'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const nombresMaterias = ['Matemáticas', 'Historia', 'Biología', 'Química', 'Física'];
    const descripciones = [
      'Materia fundamental para el desarrollo cognitivo.',
      'Estudio de eventos históricos relevantes.',
      'Estudio de organismos vivos y sus procesos.',
      'Estudio de las propiedades y reacciones de los elementos.',
      'Estudio de las fuerzas y leyes físicas.'
    ];

    // Obtener los IDs de las áreas
    const areas = await queryInterface.sequelize.query(
      'SELECT id FROM area',
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (areas.length === 0) {
      throw new Error('No se encontraron áreas en la base de datos.');
    }

    // Generar datos aleatorios para materias
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        nombre: nombresMaterias[Math.floor(Math.random() * nombresMaterias.length)],
        créditos: Math.floor(Math.random() * 10) + 1,
        descripcion: descripciones[Math.floor(Math.random() * descripciones.length)],
        id_area: areas[Math.floor(Math.random() * areas.length)].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('materia', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materia', null, {});
  }
};
