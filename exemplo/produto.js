// Model 

const Sequelize = require('sequelize');
const database = require('./database');

const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  descricao: Sequelize.STRING
});

module.exports = Produto;
