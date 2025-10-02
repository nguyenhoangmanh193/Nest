'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('account_types', [
      { id: 1, name: 'basic' },
      { id: 2, name: 'pro' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('account_types', null, {});
  },
};
