'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Albums'
    await queryInterface.bulkInsert(options, [
      {
        title: 'Her Loss',
        description: 'Drakes Album',
        userId: 1
      },
      {
        title: 'Sept 5th',
        description: 'DVSN album',
        userId: 2
      },
      {
        title: 'Faith',
        description: 'Pop Smoke album',
        userId: 3
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Albums'
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, null, {
      title: ['Her Loss', 'Sept 5th', 'Faith']
    });
  }
};
