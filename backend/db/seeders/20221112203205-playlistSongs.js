'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('PlaylistSongs', [{
      id: 1,
      songId: 1,
      playlistId: 1,
    },
    {
      id: 2,
      songId: 2,
      playlistId: 2,
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('PlaylistSongs', null, {});

  }
};
