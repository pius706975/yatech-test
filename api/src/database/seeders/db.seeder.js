'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Visitor',
      email: 'user@gmail.com',
      password: '$2b$10$cQbpPnNWCOcUIrBFRg0yWu7EoXA1i4YOi1vj9TNG/7EJRi6U94By6',
      is_verified: true
    }])
  }
}
