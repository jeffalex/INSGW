const  Sequelize  =require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

module.exports = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: false
    }
  }
);