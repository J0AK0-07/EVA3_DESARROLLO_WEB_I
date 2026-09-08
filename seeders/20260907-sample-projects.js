"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Proyecto Ejemplo 1',
        description: 'Proyecto de ejemplo para seed',
        startDate: '2026-01-01',
        endDate: '2026-06-01',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Proyecto Ejemplo 2',
        description: 'Otro proyecto de ejemplo',
        startDate: '2026-02-01',
        endDate: '2026-07-01',
        status: 'planned',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
