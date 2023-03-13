'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {

    static associate(models) {
      Playlist.belongsToMany(models.Song,
        { through: models.PlaylistSong,
          foreignKey: 'playlistId'})

      Playlist.belongsTo(models.User,
        { foreignKey: 'userId' });

        Playlist.hasMany(models.PlaylistSong, {
          foreignKey: 'playlistId', onDelete: 'CASCADE',  hooks: true
        })

    }

  }
  Playlist.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};
