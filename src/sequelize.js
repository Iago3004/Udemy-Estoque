const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('udemy-inventory', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize };
