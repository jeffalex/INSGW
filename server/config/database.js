const  Sequelize  =require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

let config = {
	username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
    define: {
      timestamps: false
    }
}

if(!process.env.NODE_ENV === 'production') {
	config.username = 'eventuser',
	config.password = 'passwevent!',
	config.database = 'eventdb',
	config.host = 'localhost',
	config.port = '3306',
	config.dialect = 'mysql'
}

module.exports = new Sequelize(config);