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
        urllink: 'url',
        userId: 1,
        albumId: 1,
        previewImage: 'https://i1.sndcdn.com/artworks-vQtytb3d8q8e-0-t500x500.jpg'
      },
      {
        title: 'Spin Bout U',
        description: 'Good beat description',
        urllink: 'url',
        userId: 1,
        albumId: 1,
        previewImage: 'https://i1.sndcdn.com/artworks-vQtytb3d8q8e-0-t500x500.jpg'
      },
      {
        title: 'Under the Influence',
        description: 'desription for u t i',
        urllink: 'url',
        userId: 2,
        albumId: 2,
        previewImage: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Chris_Brown_-_Indigo.png'
      },
      {
        title: 'Red',
        description: 'red is a cool color',
        urllink: 'url',
        userId: 2,
        albumId: 2,
        previewImage: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Chris_Brown_-_Indigo.png'
      },
      {
        title: 'Good News',
        description: 'good news description',
        urllink: 'url',
        userId: 3,
        albumId: 3,
        previewImage: 'https://wallpapercave.com/wp/wp7634462.jpg'
      },
      {
        title: 'More Time',
        description: 'More Time description',
        urllink: 'url',
        userId: 3,
        albumId: 3,
        previewImage: 'https://wallpapercave.com/wp/wp7634462.jpg'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Songs'
      await queryInterface.bulkDelete(options, null, {});

  }
};
