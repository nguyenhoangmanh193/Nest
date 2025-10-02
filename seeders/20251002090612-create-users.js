'use strict';
const { v4: uuidv4 } = require('uuid'); 
/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const today = new Date();
    const users = [];

    for (let i = 1; i <= 25; i++) {
      const year = Math.floor(Math.random() * (2010 - 1980 + 1)) + 1980;
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      const birthDate = `${year}-${month}-${day}`;

    
      const phone = String(Math.floor(Math.random() * 9000000000) + 1000000000);

 
      const postCode = String(Math.floor(Math.random() * 900000) + 1000);

      users.push({
        id: uuidv4(),
        fullname: `User ${i}`,
        phone: phone,
        email: `user${i}@example.com`,
        date: birthDate,
        addressArea: `Area ${i}`,
        addressCity: `City ${i}`,
        addressCountry: `Country ${i}`,
        postCode: postCode,
        roleId: (i % 3) + 1, 
        accountTypeId: (i % 2) + 1, 
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
