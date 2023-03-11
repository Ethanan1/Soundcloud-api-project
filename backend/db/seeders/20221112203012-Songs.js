'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Songs', [{
      id: 1,
      albumId: 1,
      userId: 1,
      title: "Circo Loco",
      previewImage: 'https://images.genius.com/31496d46a302dd9b55416525688ac9d9.1000x1000x1.png',
      url: "",
      description: "Track 1"
    },
    {
      id: 2,
      albumId: 2,
      userId: 2,
      title: "https://i1.sndcdn.com/artworks-fx4FBj9P88v3pwfY-eSbTqA-t500x500.jpg",
      previewImage: '',
      description: "Track 2"
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Songs', null, {});

  }
};
