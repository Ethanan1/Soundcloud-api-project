'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {

    static associate(models) {
      Album.hasMany(models.Song,
        { foreignKey: 'albumId',
          onDelete: 'cascade',
          hooks: true
        })

      Album.belongsTo(models.User,
        { as: 'Artist',
          foreignKey: 'userId'
        })
    }
  }
  Album.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
