'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users'
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Demo',
        lastName: 'Lition',
        email: 'Demolition@gmail.com',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      },
      {
        firstName: 'Fake',
        lastName: 'User',
        email: 'Fakeuser1@gmail.com',
        username: 'Fakeuser1',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        email: 'Fakeuser2@gmail.com',
        username: 'Fakeuser2',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Users'
    await queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
