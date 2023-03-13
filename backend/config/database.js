// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'postgres://app_academy_projects_arn6_user:eyqegGkEUoJbzhROiNWWkpzSvKwY1nKs@dpg-cg7n14jhp8u9plik2j90-a/app_academy_projects_arn6',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {         // define schema here
      schema: process.env.SCHEMA
    }
  }
};
