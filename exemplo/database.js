const Sequelize = require('sequelize'); // Letra maiuscula por ser uma classe 

const sequelize = new Sequelize('tutorial', 'root', 'Info@1234', {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306'
} );

module.exports = sequelize;