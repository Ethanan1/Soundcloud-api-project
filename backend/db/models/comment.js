'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
      Comment.belongsTo(models.User,
        { foreignKey: 'userId' })

      Comment.belongsTo(models.User,
        { foreignKey: 'username' })

      Comment.belongsTo(models.Song,
        { foreignKey: 'songId' })
    }
  }
  Comment.init({
    username: DataTypes.STRING,
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
