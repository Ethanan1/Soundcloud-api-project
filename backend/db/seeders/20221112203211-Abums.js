'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Albums', [{
      id: 1,
      userId: 1,
      title: 'Her Loss',
      description: 'Her Loss - description',
      previewImage: 'image url for Her Loss Album'
    },
    {
      id: 2,
      userId: 2,
      title: 'Indigo',
      description: 'Indigo - description',
      previewImage: 'image url for Indigo Album'
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Albums', null, {});

  }
};
