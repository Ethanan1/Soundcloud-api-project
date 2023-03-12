'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Comments'
    await queryInterface.bulkInsert(options, [
      {
        songId: 4,
        userId: 1,
        username: 'Fakeuser1',
        body: 'great song!'
      },
      {
        songId: 6,
        userId: 2,
        username: 'Fakeuser2',
        body: 'This song is okay'
      },
      {
        songId: 1,
        userId: 3,
        username: 'Demo-lition',
        body: 'Love the beat'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Comments'
      await queryInterface.bulkDelete(options, null, {});

  }
};
