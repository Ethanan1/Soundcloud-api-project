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
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@user.io',
        username: 'johnsmith',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      },
      {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'billybob1@user.io',
        username: 'billybob',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      },
      {
        firstName: 'Hello',
        lastName: 'World',
        email: 'Helloworld@user.io',
        username: 'helloworld',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: 'image'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users'
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['johnsmith', 'billybob', 'helloworld'] }
    }, {});
  }
};
