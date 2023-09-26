'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        password VARCHAR NOT NULL,
        refresh_token VARCHAR,
        token_verify VARCHAR,
        token_expire TIMESTAMP,
        is_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)

    await queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS blacklist_token (
      blacklist_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      blacklist_token VARCHAR,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `)
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS users`)
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS blacklist_token`)
  }
}