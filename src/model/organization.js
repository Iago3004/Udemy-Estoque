const database = require('../database');

class Organization {
    constructor() {
        this.model = database.db.define('organization', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: database.Sequelize.STRING,
                allowNull: true
            },
            email: {
                type: database.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
        })
    }
}

module.exports = new Organization().model;

