'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Playlists'
    await queryInterface.bulkInsert(options, [
      {
        name: 'Playlist 1',
        userId: 1,
        // previewImage: 'image url'
      },
      {
        name: 'Playlist 2',
        userId: 2,
        // previewImage: 'image url'
      },
      {
        name: 'Playlist 3',
        userId: 3,
        // previewImage: 'image url'
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Playlists'
      await queryInterface.bulkDelete(options, null, {});

  }
};
