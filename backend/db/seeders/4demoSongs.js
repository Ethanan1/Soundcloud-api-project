'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Songs'
    await queryInterface.bulkInsert(options, [
      {
        title: 'Rich Flex',
        description: 'Good song description',
        url: 'url',
        userId: 1,
        albumId: 1,
        previewImage: 'https://i1.sndcdn.com/artworks-vQtytb3d8q8e-0-t500x500.jpg'
      },
      {
        title: 'Spin Bout U',
        description: 'Good beat description',
        url: 'url',
        userId: 1,
        albumId: 1,
        previewImage: 'image'
      },
      {
        title: 'Under the Influence',
        description: 'desription for u t i',
        url: 'url',
        userId: 2,
        albumId: 2,
        previewImage: 'image'
      },
      {
        title: 'Red',
        description: 'red is a cool color',
        url: 'url',
        userId: 2,
        albumId: 2,
        previewImage: 'image'
      },
      {
        title: 'Good News',
        description: 'good news description',
        userId: 3,
        albumId: 3,
        previewImage: 'image'
      },
      {
        title: 'More Time',
        description: 'More Time description',
        userId: 3,
        albumId: 3,
        previewImage: 'image'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Songs'
      await queryInterface.bulkDelete(options, null, {});

  }
};
