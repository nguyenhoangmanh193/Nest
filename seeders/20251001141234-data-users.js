'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = ['administrator', 'viewer', 'moderator'];
    const accountTypes = ['pro', 'basic'];
    const statuses = ['active', 'inactive'];
    const today = new Date();
    const minAge = 13;

    const users = Array.from({ length: 25 }).map((_, i) => {
      const birthYear = today.getFullYear() - (minAge + (i % 30));
      const birthMonth = i % 12;
      const birthDay = (i % 28) + 1;

      return {
        fullname: `User${i + 1}`,
        phone: `0900000${(100 + i).toString().slice(-8)}`,
        email: `user${i + 1}@example.com`,
        date: new Date(birthYear, birthMonth, birthDay),
        addressArea: `Area ${i + 1}`,
        addressCity: `City ${i + 1}`,
        addressCountry: `Country ${i + 1}`,
        postCode: (1000 + i).toString(),
        role: roles[i % roles.length],
        accountType: accountTypes[i % accountTypes.length],
        status: statuses[i % statuses.length],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {}, {});
  },
};
