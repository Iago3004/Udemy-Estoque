const { Sequelize } = require('sequelize');

class Database {
  constructor() {
    this.Sequelize = Sequelize;
    this.db = new Sequelize('udemy-inventory', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
    });
  }
}

module.exports = new Database();
