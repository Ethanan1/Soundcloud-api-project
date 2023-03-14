'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {

    static associate(models) {
      // na
    }
  }
  Artist.init({
    username: DataTypes.STRING,
    totalSongs: DataTypes.INTEGER,
    totalAlbums: DataTypes.INTEGER,
    // previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};
